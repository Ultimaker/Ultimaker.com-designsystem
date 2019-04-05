import { Component, Prop, Vue } from 'vue-property-decorator';
import ViewportUtil from 'utils/viewport';

@Component({
    name: 'ListShowAll',
    template: require('./template.html'),
})

export default class ListShowAll extends Vue {
    @Prop({ type: Object, required: true }) list!: object;
    @Prop({ type: Number }) limit?: number;
    @Prop({ type: String }) label?: string;

    $list;
    $listItems;
    containerWidth;
    listLeftRightMargin;
    listItemWidth;
    showAllItems: boolean = false;
    viewportUtil: ViewportUtil = new ViewportUtil();

    beforeDestroy(): void {
        this.viewportUtil.removeResizeHandler(this.handleResize);
    }

    calculateElements(): void {
        this.$list = (this.$refs.$list as HTMLElement);
        this.$listItems = this.$list.children;
        this.listLeftRightMargin = this.getElmLeftRightMargin(this.$list);
        this.listItemWidth = this.getElmWidth(([].slice.call(this.$listItems)[0] as HTMLElement));
        this.containerWidth = this.getElmWidth((this.$refs.$container as HTMLElement));
    }

    getElmWidth(elm): number {
        const computed = (window.getComputedStyle(elm) as CSSStyleDeclaration);
        const marginLeft = computed.marginLeft || '';
        const marginRight = computed.marginRight || '';
        const width = computed.width || '';

        return Math.floor(parseFloat(width) + parseFloat(marginLeft) + parseFloat(marginRight));
    }

    getElmLeftRightMargin(elm): number {
        const computed = (window.getComputedStyle(elm) as CSSStyleDeclaration);
        const marginLeft = computed.marginLeft || '';
        const marginRight = computed.marginRight || '';

        return Math.floor(parseFloat(marginLeft) + parseFloat(marginRight));
    }

    handleResize(): void {
        if (!this.viewportUtil.isResizing) {
            this.calculateElements();

            const maxItemsPerRow = Math.floor((this.containerWidth - this.listLeftRightMargin) / this.listItemWidth);

            if (this.$listItems.length < maxItemsPerRow) {
                this.$list.style.width = `${ (this.listItemWidth * this.$listItems.length) }px`;
            } else {
                this.$list.style.width = `${ this.listItemWidth * maxItemsPerRow }px`;
            }
        }
    }

    show(evt): void {
        this.showAllItems = true;
        this.$nextTick(() => this.handleResize());
    }

    showCount(): string {
        return `${ this.label } ${(this.list as any).listItems.items.length}`;
    }

    mounted() {
        this.calculateElements();
        this.viewportUtil.addResizeHandler(this.handleResize);
    }
}
