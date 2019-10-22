/** @format */

import { CardArticle } from '@ultimaker/ultimaker.com-model-definitions/dist/molecules/cards/CardArticle';
import { Component, Prop, Watch } from 'vue-property-decorator';
import WithRender from './list-section.vue.html';

import Events from 'constants/events';
import ViewportUtil from 'utils/viewport';

import { FilterCategoryInterface } from '../filter-category/filter-category.interface';
import { ListSectionProps } from './list-section.models';

import { getFiltersInCardCollection } from './helpers/get-filters-in-card-collection';
import { getFilteredCardsFromActiveFilterCategories } from './helpers/get-filtered-cards-from-active-filter-categories';
import { updateActiveFilterCategories } from 'components/molecules/list-section/helpers/update-active-filter-categories';
import Vue from 'vue';

@WithRender
@Component({
    name: 'ListSection',
})
export class ListSection extends Vue implements ListSectionProps {
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

    activeFilterCategories: FilterCategoryInterface[] = [];
    chunks: object[] = [];
    chunkSize: number = 3;
    chunkIndex: number = 0;
    expanded: boolean = false;
    eventFilterCategoryChange: string = 'filter-category-change';
    showMax: number = 6;
    viewportUtil: ViewportUtil = new ViewportUtil();
    visibleChunks: number = 0;
    visibleTooltip: boolean = false;

    beforeDestroy(): void {
        this.viewportUtil.removeResizeHandler(this.handleResize);
    }

    mounted() {
        this.viewportUtil.addResizeHandler(this.handleResize);
        this.viewportUtil.triggerResize();
        this.handleResize();
        this.createChunks();
    }

    get activeFilters() {
        return getFiltersInCardCollection(this.filteredCards as CardArticle[]);
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

    get filteredCards(): CardArticle[] {
        if (!this.activeFilterCategories.length) {
            return <CardArticle[]> this.cards;
        }

        return getFilteredCardsFromActiveFilterCategories(<CardArticle[]> this.cards, this.activeFilterCategories);
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

    handleFilterCategoryChange(changedFilterCategory) {
        this.activeFilterCategories = updateActiveFilterCategories(this.activeFilterCategories, changedFilterCategory);
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
                this.$emitPublic(Events.click, this.clickEventData);
            } catch (e) {
                console.warn(e);
            }
        }
    }
}
