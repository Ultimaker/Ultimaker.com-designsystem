/** @format */

import { Component, Prop, Mixins, Watch } from 'vue-property-decorator';
import Events from 'constants/events';
import BrowserCapabilities from 'utils/browser-capabilities';
import ViewportUtil from 'utils/viewport';
import WithRender from './list-section.vue.html';

import { ListSectionProps } from 'components/molecules/list-section/list-section.models';
import { StepRowAnimation } from 'js/mixins/step-row-animation/step-row-animation';

@WithRender
@Component({
    name: 'ListSection',
})
export class ListSection extends Mixins(StepRowAnimation) implements ListSectionProps {
    @Prop({ type: Array, required: true }) cards!: ListSectionProps['cards'];
    @Prop({ type: Array }) filterCategories?: ListSectionProps['filterCategories'];
    @Prop({ type: Object }) limit?: ListSectionProps['limit'];
    @Prop({ type: String }) title?: ListSectionProps['title'];
    @Prop({ type: Object }) tooltip?: ListSectionProps['tooltip'];

    /**
     * @type PublicEventService.emit
     */
    $emitPublic;

    /**
     * @type PublicEventService.off
     */
    $offPublic;

    /**
     * @type PublicEventService.on
     */
    $onPublic;

    $route;

    chunks: object[] = [];
    chunkSize: number = 3;
    chunkIndex: number = 0;
    expanded: boolean = false;
    filters: object = {};
    filtersAll: any = [];
    showMax: number = 6;
    viewportUtil: ViewportUtil = new ViewportUtil();
    visibleChunks: number = 0;
    visibleTooltip: boolean = false;

    beforeDestroy(): void {
        this.$offPublic('filterChange', this.handleFilterChange);
        this.viewportUtil.removeResizeHandler(this.handleResize);
    }

    async mounted() {
        if (!BrowserCapabilities.isBrowser) {
            return;
        }

        await this.viewportUtil.addResizeHandler(this.handleResize);
        await this.viewportUtil.triggerResize();
        await this.handleResize();

        this.$onPublic('filterChange', this.handleFilterChange);
        this.createChunks();
    }

    get filteredCards() {
        if (this.filtersAll.length) {
            // @ts-ignore
            return this.cards.filter((card) => card.labels.some((label) => this.filtersAll.includes(label)));
        }

        return this.cards;
    }

    @Watch('cards')
    createChunks() {
        this.chunkIndex = 0;
        this.chunks = [];

        while (this.chunkIndex < this.filteredCards.length) {
            this.chunks.push(this.filteredCards.slice(this.chunkIndex, this.chunkSize + this.chunkIndex));
            this.chunkIndex += this.chunkSize;
        }
    }

    handleFilterChange(payload): void {
        this.filters[payload.category] = payload.filters;
        this.filtersAll = [];

        Object.keys(this.filters).forEach((category) => {
            this.filters[category].forEach((value) => this.filtersAll.push(value));
        });

        this.createChunks();
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

    showButton(): boolean {
        if (this.limit && !this.limit.expandAmount && this.expanded) {
            return false;
        }

        if (this.expanded && this.chunks.length <= this.visibleChunks) {
            return false;
        }

        return !(this.chunks.length <= this.visibleChunks);
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

            return `${label} (${this.filteredCards.length})`;
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
}
