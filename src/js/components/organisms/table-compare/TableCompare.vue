<template>
    <section class="organism">
        <div class="container">
            <header-block :title="title" :subtitle="subtitle" />
            <div class="table-compare" ref="scrollWidthContainer">
                <div class="table-compare__scroll-container" ref="scrollContainer">
                    <table v-if="content" class="table-compare__table" :style="`--number-of-columns: ${ scrollingColumns };`">
                        <colgroup>
                            <col v-if="showScrollingColumns">
                            <col v-for="col in content.columns">
                            <col v-if="showScrollingColumns">
                        </colgroup>
                        <thead >
                        <tr>
                            <th scope="col" v-if="showScrollingColumns"></th>
                            <th scope="col" v-for="col in content.columns" ref="columns">
                                <c-image
                                    :sizes="'180px'"
                                    :srcset-widths="[180, 360]"
                                    alt="col.alt"
                                    class="table-compare__image"
                                    v-bind="col.image"
                                    v-if="col.image && col.image.url"
                                />
                                <span>{{ col.title }}</span>
                            </th>
                            <th scope="col" v-if="showScrollingColumns"></th>
                        </tr>
                        </thead>
                        <tbody>

                        <tr v-for="row in content.rows">
                            <td v-if="showScrollingColumns"></td>
                            <td v-for="cell in row.cells">
                                <span class="table-compare__cell">{{ cell.label }}</span>
                                <icon icon-name="checkmark" v-if="cell.checked" class="table-compare__checkmark" />
                            </td>
                            <td v-if="showScrollingColumns"></td>
                        </tr>
                        </tbody>
                        <tfoot>
                        <tr>
                            <th scope="row" v-if="showScrollingColumns"></th>
                            <td v-for="cell in content.columns">
                                <component v-if="cell.cta" v-bind="cell.cta" :is="cell.cta.type" :class="getClassNames(cell.cta.type)"/>
                            </td>
                            <td scope="row" v-if="showScrollingColumns"></td>
                        </tr>
                        </tfoot>
                    </table>
                </div>

                <div class="table-compare__scroll-buttons" v-if="showScrollButtons">
                    <icon-button icon-name="angle-left" class="table-compare__scroll-button table-compare__scroll-button--left" @click="scroll(true)" :disabled="disableLeft" />
                    <icon-button icon-name="angle-right" class="table-compare__scroll-button table-compare__scroll-button--right" @click="scroll(false)" :disabled="disableRight" />
                </div>

                <div class="table-compare-features">
                    <div class="table-compare-features--header"></div>
                    <div class="table-compare-features--body" v-for="row in content.rows">
                        <div class="table-compare__feature" v-if="row.tooltip">
                            <tooltip-toggle v-bind="row.tooltip" :label="row.label" />
                        </div>
                        <div class="table-compare__feature--no-tooltip" v-else>
                            <span>{{ row.label }}</span>
                        </div>
                    </div>
                    <div class="table-compare-features--footer"></div>
                </div>
            </div>

            <footer-block :ctas="ctas" />
        </div>
    </section>
</template>

<script lang="ts">
    import Vue from 'vue';
    import ViewportUtility from '../../../utils/viewport';
    import BrowserCapabilities from '../../../utils/browser-capabilities';
    import debounce from 'lodash/debounce';

    export default Vue.component('TableCompare', {
        props: {
            title: {
                type: String,
                required: true,
            },
            subtitle: {
                type: String,
            },
            content: {
                type: Object,
                required: true,
            },
            ctas: {
                type: Object,
            },
        },
        data(): any {
            return {
                observer: null,
                disableLeft: false,
                disableRight:  false,
                viewportUtility: new ViewportUtility(),
                initiallyVisible: 3,
                scrollingColumns: 0,
                showScrollingColumns: false,
            }
        },
        watch: {
            'content.columns': function() {
                this.observeColumns();
            },
            'scrollingColumns': function() {
                this.resetScrollingColumns();
            }
        },
        computed: {
            columnLength(): number {
                return this.content.columns.length;
            },
            showScrollButtons(): any {
                return ((this.columnLength - this.initiallyVisible) > 0 && !this.viewportUtility.isMobile) ||
                    ((this.viewportUtility.isMobile || this.viewportUtility.isTablet) && this.columnLength > 1);
            },
        },
        methods: {
            observeColumns() {
                this.observer.disconnect();

                if (this.$refs.columns && this.$refs.columns.length) {
                    this.observer.observe(this.$refs.columns[0]);
                    this.observer.observe(this.$refs.columns.slice(-1)[0]);
                }
            },
            resetScrollingColumns(): void {
                this.showScrollingColumns = !this.viewportUtility.isMobile && !this.viewportUtility.isTablet;
                this.scrollingColumns = !this.viewportUtility.isMobile && !this.viewportUtility.isTablet ? this.columnLength + 1 : this.columnLength;
            },
            intersectionObserver(entries): void {
                const firstColumn = this.$refs.columns[0];
                const lastColumn = this.$refs.columns.slice(-1)[0];
                this.disableLeft = false;
                this.disableRight = false;

                entries.some((entry) => {
                    if (entry.isIntersecting) {
                        if (entry.target === firstColumn) {
                            this.disableLeft = true;

                            return true;
                        }
                        if (entry.target === lastColumn) {
                            this.disableRight = true;

                            return true;
                        }
                    }

                    return false;
                });
            },
            async scroll(reverse: boolean = false): Promise<void> {
                const scrollWidth = this.$refs.scrollWidthContainer.clientWidth;
                const { scrollLeft } = this.$refs.scrollContainer;
                const { scrollContainer } = this.$refs;

                const xCord = (scrollLeft + (reverse ? -1 : 1) * scrollWidth);
                if (this.$refs.scrollContainer.scrollTo || this.viewportUtility.isMobile) {
                    await this.$refs.scrollContainer.scrollTo({
                        left: xCord,
                        behavior: 'smooth',
                    });
                } else {
                    scrollContainer.scrollLeft = reverse ? 0 : (this.initiallyVisible * (scrollWidth / this.columnLength));
                }
            },
            resetScrollPosition(): void {
                this.resetScrollingColumns();
                this.$refs.scrollContainer.scrollLeft = 0;
            },
            getClassNames(type): string {
                return {
                    ContentButton: 'button',
                    ContentLink: 'link link--medium',
                    YoutubeLink: '',
                }[type] || '';
            }
        },
        beforeDestroy(): void {
            this.resizeHandler.cancel();
            this.viewportUtility.removeResizeHandler(this.resizeHandler);
            this.observer.unobserve(this.$refs.scrollContainer);
        },
        mounted(): void {
            this.resizeHandler = debounce(this.resetScrollPosition, 100);
            this.viewportUtility.addResizeHandler(this.resizeHandler);

            const options = {
                root: this.$refs.scrollWidthContainer,
                threshold: 0.99,
            };

            if (BrowserCapabilities.supportsIntersectionObserver) {
                this.observer = new IntersectionObserver(this.intersectionObserver, options);
                this.observeColumns();
            }

            this.resetScrollPosition();
        },
    });
</script>
