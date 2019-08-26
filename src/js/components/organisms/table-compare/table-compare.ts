import { Vue, Component, Prop, Watch } from 'vue-property-decorator';
import debounce from 'lodash/debounce';
import ViewportUtility from 'utils/viewport';
import BrowserCapabilities from 'utils/browser-capabilities';
import { TableCompareProps } from './table-compare.models';
import WithRender from './table-compare.vue.html';

@WithRender
@Component({
    name: 'TableCompare',
})

export default class TableCompare extends Vue implements TableCompareProps {
    @Prop({ type: String, required: true }) title!: TableCompareProps['title'];
    @Prop({ type: String }) subtitle?: TableCompareProps['subtitle'];
    @Prop({ type: Object, required: true }) content!: TableCompareProps['content'];
    @Prop({ type: Object }) ctas?: TableCompareProps['ctas'];

    observer!: IntersectionObserver;
    disableLeft: boolean = false;
    disableRight: boolean = false;
    resizeHandler!: {
        cancel: Function;
    };
    viewportUtility = new ViewportUtility();

    $refs!: {
        scrollWidthContainer: HTMLElement;
        scrollContainer: HTMLElement;
        columns: HTMLElement[];
        footers: HTMLElement[];
    };

    visibilityClass: string = 'invisible';
    initiallyVisible: number = 3;

    mounted() {
        this.resizeHandler = debounce(this.resetScrollPosition, 100);
        this.viewportUtility.addResizeHandler(this.resizeHandler);

        if (!this.viewportUtility.isMobile) {
            this.$refs.scrollContainer.addEventListener('scroll', this.scrollHandler);
        }

        const options = {
            root: this.$refs.scrollWidthContainer,
            threshold: 0.99,
        };

        if (BrowserCapabilities.supportsIntersectionObserver) {
            this.observer = new IntersectionObserver(this.intersectionObserver, options);
            this.observeColumns();
        }
    }

    get columnLength() {
        return this.content.columns.length;
    }

    get visibilityOffset() {
        const offSet = this.$refs.scrollContainer.offsetWidth;
        return (offSet / this.columnLength) * (this.columnLength - this.initiallyVisible);
    }

    get showScrollButtons() {
        return ((this.columnLength - this.initiallyVisible) > 0 && !this.viewportUtility.isMobile) ||
            ((this.viewportUtility.isMobile || this.viewportUtility.isTablet) && this.columnLength > 1);
    }

    scrollHandler(): void {
        if (!this.viewportUtility.isMobile) {
            if (this.$refs.scrollContainer.scrollLeft <= this.visibilityOffset) {
                this.toggleVisibility(this.$refs.footers, (this.columnLength - this.initiallyVisible), true);
                this.toggleVisibility(this.$refs.columns, (this.columnLength - this.initiallyVisible), true);
            } else {
                this.toggleVisibility(this.$refs.footers, (this.columnLength - this.initiallyVisible), false);
                this.toggleVisibility(this.$refs.columns, (this.columnLength - this.initiallyVisible), false);
            }
        }
    }

    beforeDestroy() {
        this.resizeHandler.cancel();
        this.viewportUtility.removeResizeHandler(this.resizeHandler);
        this.observer.unobserve(this.$refs.scrollContainer);

        if (!this.viewportUtility.isMobile) {
            this.$refs.scrollContainer.removeEventListener('scroll', this.scrollHandler);
        }
    }

    @Watch('content.columns')
    observeColumns() {
        this.observer.disconnect();

        if (this.$refs.columns && this.$refs.columns.length) {
            this.observer.observe(this.$refs.columns[0]);
            this.observer.observe(this.$refs.columns.slice(-1)[0]);
        }
    }

    intersectionObserver(entries) {
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
    }

    toggleVisibility(items: HTMLElement[], amount: number, show: boolean) {
        items.forEach((item: HTMLElement, index :number) => {
            if (index < amount && item) {
                if (show) {
                    item.classList.remove(this.visibilityClass);
                } else {
                    item.classList.add(this.visibilityClass);
                }
            }
        });
    }

    async scroll(reverse: boolean = false): Promise<void> {
        const scrollWidth = this.$refs.scrollWidthContainer.clientWidth;
        const { scrollLeft } = this.$refs.scrollContainer;

        await this.$refs.scrollContainer.scrollTo({
            left: scrollLeft + (reverse ? -1 : 1) * scrollWidth,
            behavior: 'smooth',
        });
    }

    resetScrollPosition() {
        this.$refs.scrollContainer.scrollLeft = 0;
    }

    getClassNames(type): string {
        return {
            ContentButton: 'button',
            ContentLink: 'link link--medium',
            YoutubeLink: '',
        }[type] || '';
    }
}
