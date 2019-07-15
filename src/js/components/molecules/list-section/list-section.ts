/** @format */

import { Component, Prop, Mixins } from 'vue-property-decorator';

import ViewportUtil from 'utils/viewport';
import BrowserCapabilities from 'utils/browser-capabilities';

import { StepRowAnimation } from 'js/mixins/step-row-animation/step-row-animation';

import { ListSection as IListSection } from '@ultimaker/ultimaker.com-model-definitions/dist/molecules/sections/ListSection';
import Events from 'constants/events';
import WithRender from './list-section.vue.html';

@WithRender
@Component({
    name: 'ListSection',
})
export class ListSection extends Mixins(StepRowAnimation) implements IListSection {
    @Prop({ type: Array, required: true }) cards!: IListSection['cards'];
    @Prop({ type: Object }) limit?: IListSection['limit'];
    @Prop({ type: String }) title?: IListSection['title'];
    @Prop({ type: Object }) tooltip?: IListSection['tooltip'];

    viewportUtil: ViewportUtil = new ViewportUtil();
    visibleTooltip: boolean = false;

    $route;
    $emitPublic;

    showMax: number = 6;
    expanded: boolean = false;

    chunks: object[] = [];
    chunkSize: number = 3;
    chunkIndex: number = 0;
    visibleChunks: number = 0;

    createChunks() {
        this.chunkIndex = 0;
        this.chunks = [];

        while (this.chunkIndex < this.cards.length) {
            this.chunks.push(this.cards.slice(this.chunkIndex, this.chunkSize + this.chunkIndex));
            this.chunkIndex += this.chunkSize;
        }
    }

    handleResize(): void {
        const oldChunkSize = this.chunkSize;

        if (this.viewportUtil.isMobile) {
            this.showMax =
                this.limit && typeof this.limit.smallScreen === 'number'
                    ? this.limit.smallScreen
                    : Number.MAX_SAFE_INTEGER;
            this.chunkSize = 1;
        } else if (this.viewportUtil.isMobileXl) {
            this.showMax =
                this.limit && typeof this.limit.smallScreen === 'number'
                    ? this.limit.smallScreen
                    : Number.MAX_SAFE_INTEGER;
            this.chunkSize = 2;
        } else {
            this.showMax =
                this.limit && typeof this.limit.largeScreen === 'number'
                    ? this.limit.largeScreen
                    : Number.MAX_SAFE_INTEGER;
            this.chunkSize = 3;
        }

        if (oldChunkSize !== this.chunkSize) {
            this.createChunks();
        }

        if (!this.expanded) {
            this.visibleChunks = Math.ceil(this.showMax / this.chunkSize);
        }
    }

    async mounted() {
        if (!BrowserCapabilities.isBrowser) {
            return;
        }

        await this.viewportUtil.addResizeHandler(this.handleResize);
        await this.viewportUtil.triggerResize();
        await this.handleResize();
        this.createChunks();
    }

    showButton(): boolean {
        if (this.limit && !this.limit.expandAmount && this.expanded) {
            return false;
        }

        if (this.expanded && this.chunks.length <= this.visibleChunks) {
            return false;
        }

        if (this.chunks.length <= this.visibleChunks) {
            return false;
        }

        return true;
    }

    showAll(): void {
        this.expanded = true;
        this.visibleChunks = Number.MAX_SAFE_INTEGER;
    }

    showChunk(): void {
        this.expanded = true;
        if (this.limit && this.limit.expandAmount) {
            this.visibleChunks = this.visibleChunks + Math.ceil(this.limit.expandAmount / this.chunkSize);
        }
    }

    showLabel(): string {
        if (this.limit && this.limit.expand && this.limit.expandAmount) {
            const { label } = this.limit.expand;

            return label;
        }

        if (this.limit && this.limit.expand && !this.limit.expandAmount) {
            const { label } = this.limit.expand;

            return `${label} (${this.cards.length})`;
        }

        return '';
    }

    tooltipVisible(): boolean {
        return this.visibleTooltip;
    }

    hideTooltip(): void {
        this.visibleTooltip = false;
    }

    toggleTooltip(): void {
        this.visibleTooltip = !this.visibleTooltip;
    }

    get clickEventType() {
        return Events.click;
    }

    get clickEventData() {
        if (this.limit && this.limit.expand && this.limit.expand.clickEvent) {
            const { clickEvent } = this.limit.expand;

            return {
                dataType: clickEvent.name,
                data: {
                    ...clickEvent.data,
                    pageSlug: this.$route.fullPath,
                },
            };
        }
        return null;
    }

    triggerEventClick(): void {
        if (this.limit && this.limit.expand && this.limit.expand.clickEvent) {
            try {
                this.$emitPublic(this.clickEventType, this.clickEventData);
            } catch (e) {
                console.warn(e);
            }
        }
    }

    beforeDestroy(): void {
        this.viewportUtil.removeResizeHandler(this.handleResize);
    }
}
