<template>
    <section class="list-section">
        <template v-if="title">
            <header class="list-section__header">
                <h3 class="list-section__title">{{ title }}
                    <span class="list-section__count">({{cards.length}})</span>
                    <template v-if="tooltip">
                        <transition name="tooltip">
                            <tooltip class="section-tooltip" block="list-section" v-show="visibleTooltip" v-bind="tooltip" :id="`tooltip_${ uniqId }`">
                                {{ tooltip.description }}
                            </tooltip>
                        </transition>
                    </template>
                </h3>
                <template v-if="tooltip">
                    <action-button
                        class="link list-section__info-link"
                        :icon="tooltip.icon"
                        mod="reversed"
                        @click.native.prevent="toggleTooltip"
                        @blur.native.prevent="hideTooltip"
                        role="button"
                        :aria-describedby="`tooltip_${ uniqId }`"
                        v-if="tooltip">
                        {{ tooltip.label }}
                    </action-button>
                </template>
            </header>
        </template>

        <template v-for="filterCategory in filterCategories">
            <filter-category
                v-bind="filterCategory"
                :activeFilters="activeFilters"
                :eventChange="eventFilterCategoryChange"
                @[eventFilterCategoryChange]="handleFilterCategoryChange" />
        </template>

        <ul class="list-section__container">
            <li v-for="(chunk, index) in chunks"
                :key="index" class="list-section__row"
                :class="chunk.length % 2 === 0 && 'list-section__row--even'"
                v-show="index < visibleChunks">
                <component v-if="chunk && chunk.length"
                           class="list-section__item"
                           :is="card.type"
                           :key="i"
                           v-bind="card"
                           v-for="(card, i) in chunk" />
            </li>
        </ul>

        <footer class="list-section__footer">
            <button @click="limit && limit.expandAmount ? showChunk() : showAll()"
                    v-show="showButton()"
                    class="button--secondary list-section__footer__button">
                {{ showLabel() }}
            </button>
        </footer>
    </section>
</template>

<script lang="ts">
    import Vue from 'vue';
    import ViewportUtility from '../../../utils/viewport';
    import { getFiltersInCardCollection } from 'components/molecules/list-section/helpers/get-filters-in-card-collection';
    import { CardArticle } from '@ultimaker/ultimaker.com-model-definitions/dist/molecules/cards/CardArticle';
    import { getFilteredCardsFromActiveFilterCategories } from 'components/molecules/list-section/helpers/get-filtered-cards-from-active-filter-categories';
    import Events from '../../../constants/events';
    import { updateActiveFilterCategories } from 'components/molecules/list-section/helpers/update-active-filter-categories';

    export default Vue.component('ListSection', {
        props: {
            cards: {
                type: Array,
                required: true,
            },
            filterCategories: {
                type: Array,
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
        data() {
            return {
                activeFilterCategories: [],
                chunks: [],
                chunkSize: 3,
                chunkIndex: 0,
                expanded: false,
                eventFilterCategoryChange: 'filter-category-change',
                showMax: 6,
                viewportUtil: new ViewportUtility(),
                visibleChunks: 0,
                visibleTooltip: false,
            }
        },
        watch: {
            cards(): void {
                this.createChunks();
            }
        },
        computed: {
            activeFilters(): any {
                return getFiltersInCardCollection(this.filteredCards as CardArticle[]);
            },
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
            filteredCards(): CardArticle[] {
                if (!this.activeFilterCategories.length) {
                    return (this.cards as CardArticle[]);
                }

                return getFilteredCardsFromActiveFilterCategories((this.cards as CardArticle[]), this.activeFilterCategories);
            },
        },
        methods: {
            createChunks(): any {
                this.chunkIndex = 0;
                this.chunks = [];

                while (this.chunkIndex < this.filteredCards.length) {
                    // @ts-ignore
                    this.chunks.push(this.filteredCards.slice(this.chunkIndex, this.chunkSize + this.chunkIndex));
                    this.chunkIndex += this.chunkSize;
                }
            },
            handleFilterCategoryChange(changedFilterCategory): void {
                // @ts-ignore
                this.activeFilterCategories = updateActiveFilterCategories(this.activeFilterCategories, changedFilterCategory);
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

                    return `${label} (${this.filteredCards.length})`;
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
            }
        },
        beforeDestroy(): void {
            this.viewportUtil.removeResizeHandler(this.handleResize);
        },
        mounted(): void {
            this.viewportUtil.addResizeHandler(this.handleResize);
            this.viewportUtil.triggerResize();
            this.handleResize();
            this.createChunks();
        }
    });
</script>
