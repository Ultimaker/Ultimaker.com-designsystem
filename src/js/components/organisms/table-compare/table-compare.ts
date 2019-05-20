import { Vue, Component, Prop } from 'vue-property-decorator';
import debounce from 'lodash/debounce';
import ViewportUtility from 'utils/viewport';
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

    resizeHandler!: {
        cancel: Function;
    };
    viewportUtility = new ViewportUtility();

    $refs!: {
        scrollWidthContainer: HTMLElement;
        scrollContainer: HTMLElement;
    };

    scroll(reverse: boolean = false): void {
        const scrollWidth = this.$refs.scrollWidthContainer.clientWidth;
        const scrollLeft = this.$refs.scrollContainer.scrollLeft;
        this.$refs.scrollContainer.scrollTo({
            left: scrollLeft + (reverse ? -1 : 1) * scrollWidth,
            behavior: 'smooth',
        });
    }

    resetScrollPosition() {
        this.$refs.scrollContainer.scrollLeft = 0;
    }

    mounted() {
        this.resizeHandler = debounce(this.resetScrollPosition, 100);
        this.viewportUtility.addResizeHandler(this.resizeHandler);
    }

    beforeDestroy() {
        this.resizeHandler.cancel();
        this.viewportUtility.removeResizeHandler(this.resizeHandler);
    }
}
