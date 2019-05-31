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
    };

    mounted() {
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
    }

    beforeDestroy() {
        this.resizeHandler.cancel();
        this.viewportUtility.removeResizeHandler(this.resizeHandler);
        this.observer.unobserve(this.$refs.scrollContainer);
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

    scroll(reverse: boolean = false): void {
        const scrollWidth = this.$refs.scrollWidthContainer.clientWidth;
        const { scrollLeft } = this.$refs.scrollContainer;

        this.$refs.scrollContainer.scrollTo({
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
