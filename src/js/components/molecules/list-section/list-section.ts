import Vue from 'vue';
import Events from '../../../constants/events';
import ViewportUtility from '../../../utils/viewport';
import { CardArticle } from '@ultimaker/ultimaker.com-model-definitions/dist/molecules/cards/CardArticle';
import { FilterCategory } from '@ultimaker/ultimaker.com-model-definitions/dist/molecules/filter-category/FilterCategory';
import { ListSectionDataInterface } from 'components/molecules/list-section/list-section-data-interface';
import { ValueFilter } from 'utils/filters/ValueFilter';

export default Vue.component('ListSection', {
    props: {
        cards: {
            type: Array,
            required: true,
        },

        filterGroup: {
            type: Object,
        },

        limit: {
            type: Object,
        },

        title: {
            type: String,
        },

        tooltip: {
            type: Object,
        },
    },

    data(): ListSectionDataInterface {
        return {
            chunkIndex: 0,
            chunks: [],
            chunkSize: 3,
            expanded: false,
            showMax: 6,
            valueFilter: new ValueFilter(this.cards, this.filterGroup || undefined),
            viewportUtil: new ViewportUtility(),
            visibleChunks: 12,
            visibleTooltip: false,
        };
    },

    watch: {
        cards(): void {
            this.createChunks();
        },
    },

    computed: {
        clickEventData(): object | null {
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
        },

    },
    methods: {
        filteredCards(): CardArticle[] {
            return this.valueFilter.filteredItems();
        },

        filterCategories(): FilterCategory[] {
            if (this.filterGroup === undefined) {
                return [];
            }

            return this.filterGroup.filterCategories;
        },

        createChunks(): void {
            this.chunkIndex = 0;
            this.chunks = [];

            while (this.chunkIndex < this.filteredCards().length) {
                // @ts-ignore
                this.chunks.push(this.filteredCards().slice(this.chunkIndex, this.chunkSize + this.chunkIndex));
                this.chunkIndex += this.chunkSize;
            }
        },

        toggleFilterLabel(value: string): void {
            if (this.valueFilter.isFilterActive(value)) {
                this.valueFilter.removeActiveFilterValue(value);
            } else {
                this.valueFilter.addActiveFilterValue(value);
            }

            this.createChunks();
        },

        isAnyLabelSelected(labels: string[]): boolean {
            return labels.some(
                (label): boolean => this.valueFilter.activeFilters().includes(label),
            );
        },

        removeCategoryLabels(labels: string[]): void {
            labels.forEach((label: string): void => this.valueFilter.removeActiveFilterValue(label));
            this.createChunks();
        },

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
        },

        hideTooltip(): void {
            this.visibleTooltip = false;
        },

        showAll(): void {
            this.expanded = true;
            this.visibleChunks = Number.MAX_SAFE_INTEGER;
        },

        showButton(): boolean {
            if (this.limit && !this.limit.expandAmount && this.expanded) {
                return false;
            }

            if (this.expanded && this.chunks.length <= this.visibleChunks) {
                return false;
            }

            return !(this.chunks.length <= this.visibleChunks);
        },

        showChunk(): void {
            this.expanded = true;
            if (this.limit && this.limit.expandAmount) {
                this.visibleChunks = this.visibleChunks + Math.ceil(this.limit.expandAmount / this.chunkSize);
            }
        },

        showLabel(): string {
            if (this.limit && this.limit.expand && this.limit.expandAmount) {
                const { label } = this.limit.expand;

                return label;
            }

            if (this.limit && this.limit.expand && !this.limit.expandAmount) {
                const { label } = this.limit.expand;

                return `${label} (${this.filteredCards().length})`;
            }

            return '';
        },

        toggleTooltip(): void {
            this.visibleTooltip = !this.visibleTooltip;
        },

        tooltipVisible(): boolean {
            return this.visibleTooltip;
        },

        triggerEventClick(): void {
            if (this.limit && this.limit.expand && this.limit.expand.clickEvent) {
                try {
                    this.$emitPublic(Events.gtm.click, this.clickEventData);
                } catch (e) {
                    console.warn(e);
                }
            }
        },
    },

    beforeDestroy(): void {
        this.viewportUtil.removeResizeHandler(this.handleResize);
    },

    mounted(): void {
        this.viewportUtil.addResizeHandler(this.handleResize);
        this.viewportUtil.triggerResize();
        this.handleResize();
    },

    created(): void {
        this.createChunks();
    },
});
