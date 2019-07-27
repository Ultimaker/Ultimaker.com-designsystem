/** @format */

import { Component, Prop, Mixins, Watch } from 'vue-property-decorator';
import WithRender from './list-section.vue.html';

import Events from 'constants/events';
import BrowserCapabilities from 'utils/browser-capabilities';
import ViewportUtil from 'utils/viewport';

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

    $route;

    activeCategories: object = {};
    activeCategoryCount = 0;
    activeCategoryFilters: string[] = [];
    chunks: object[] = [];
    chunkSize: number = 3;
    chunkIndex: number = 0;
    expanded: boolean = false;
    showMax: number = 6;
    viewportUtil: ViewportUtil = new ViewportUtil();
    visibleChunks: number = 0;
    visibleTooltip: boolean = false;

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

    get clickEventType() {
        return Events.click;
    }

    get filteredCards() {
        if (!this.activeCategoryFilters.length) {
            return this.cards;
        }

        if (this.activeCategoryCount === 1) {
            return this.getAllCardsThatMatchAllFilters();
        }

        return this.getAllCardsThatMatchAllFiltersAcrossCategories();
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

    getAllCardsThatMatchAllFilters() {
        // @ts-ignore
        return this.cards.filter((card) => {
            if (card.labels) {
                return card.labels.some((label) => this.activeCategoryFilters.includes(label));
            }

            return false;
        });
    }

    getAllCardsThatMatchAllFiltersAcrossCategories() {
        // @ts-ignore
        return this.cards.filter((card) => {
            if (card.labels) {
                let isLabelInAllCategories = true;

                Object.keys(this.activeCategories).forEach(
                    (category) => {
                        if (this.activeCategories[category].length) {
                            if (!card.labels.some((label) => this.activeCategories[category].includes(label))) {
                                isLabelInAllCategories = false;
                            }
                        }
                    },
                );

                return isLabelInAllCategories;
            }

            return false;
        });
    }

    getActiveCategoryFilters() {
        const result: string[] = [];

        Object.keys(this.activeCategories).forEach((category) => {
            this.activeCategoryCount += 1;
            this.activeCategories[category].forEach((filter: string) => result.push(filter));
        });

        return result;
    }

    handleFilterCategoryChange(payload): void {
        this.activeCategoryCount = 0;
        this.activeCategories[payload.category] = payload.filters;
        this.activeCategoryFilters = this.getActiveCategoryFilters();

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

    hideTooltip(): void {
        this.visibleTooltip = false;
    }

    showAll(): void {
        this.expanded = true;
        this.visibleChunks = Number.MAX_SAFE_INTEGER;
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

    toggleTooltip(): void {
        this.visibleTooltip = !this.visibleTooltip;
    }

    tooltipVisible(): boolean {
        return this.visibleTooltip;
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

    mounted() {
        this.viewportUtil.addResizeHandler(this.handleResize);
        this.viewportUtil.triggerResize();
        this.handleResize();
        this.createChunks();
    }
}
