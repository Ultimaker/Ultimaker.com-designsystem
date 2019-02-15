import { Vue, Component, Prop, Watch } from 'vue-property-decorator';
import { Link } from '@ultimaker/ultimaker.com-model-definitions/dist/atoms/cta/Link';

@Component({
    name: 'flyout-section',
    template: require('./flyout-section.html'),
})

export default class Flyout extends Vue  {
    @Prop({ type: Boolean, required: false }) isCompact?: boolean;
    @Prop({ type: Number, required: false, default: 3 }) maxVisible?: number;
    @Prop({ type: Number, required: false, default: 6 }) maxItemsCol?: number;

    @Prop({ type: Object, required: true }) listHeading!: object;
    @Prop({ type: Object, required: false }) bottomLink?: object;
    @Prop({ type: String, required: false, default: () => `flyout_title_${ ~~(Math.random() * 10000) }` }) itemId?: string;
    @Prop({ type: Array, required: true }) links!: Link[];

    isExpanded: boolean =  false;
    focusIndex: null | number = null;
    columnClassDouble: string = 'flyout__section--2-columns';
    columnClassTriple: string = 'flyout__section--3-columns';

    get hasItems(): Link[] {
        return this.links;
    }

    get focusableItems() {
        return Array.isArray(this.$refs.focusable) ? this.$refs.focusable : [this.$refs.focusable];
    }

    get moreThanMaxItems(): boolean {
        // @ts-ignore
        return this.links.length > this.maxItemsCol;
    }

    get lessThanDoubleMaxItems(): boolean {
        // @ts-ignore
        return this.links.length <= this.maxItemsCol * 2;
    }

    get moreThanDoubleMaxItems(): boolean {
        // @ts-ignore
        return this.links.length > this.maxItemsCol * 2;
    }

    get sectionClass(): string {
        if (this.hasItems && this.moreThanMaxItems && this.lessThanDoubleMaxItems) {
            return this.columnClassDouble;
        }

        if (this.hasItems && this.moreThanDoubleMaxItems) {
            return this.columnClassTriple;
        }

        return '';
    }

    get flyoutToggleIsVisible()  {
        // @ts-ignore
        return this.isCompact && this.links.length > this.maxVisible;
    }

    toggleExpanded(): void {
        this.isExpanded = !this.isExpanded;
    }

    selectFirstLink(): void {
        this.focusIndex = 0;
    }

    selectLastLink(): void {
        //@ts-ignore
        this.focusIndex--;
    }

    selectNextLink(): boolean {
        // @ts-ignore
        if (this.focusIndex >= this.focusableItems.length - 1) {
            return false;
        }

        // @ts-ignore
        this.focusIndex++;

        return true;
    }

    selectPrevLink(): boolean {
        // @ts-ignore
        if (this.focusIndex <= 0) {
            return false;
        }
        // @ts-ignore
        this.focusIndex--;

        return true;
    }

    setFocusIndex(index): void {
        if (index <= 0) {
            this.focusIndex = 0;
        } else if (index >= this.focusableItems.length) {
            this.focusIndex = this.focusableItems.length - 1;
        } else {
            this.focusIndex = index;
        }
    }

    reset(): void {
        this.focusIndex = null;
    }

    @Watch('focusIndex')
    onFocusIndex(newVal): void {
        const focusComponent = this.focusableItems[newVal];

        if (typeof focusComponent === 'undefined') {
            return;
        }
        // @ts-ignore
        const focusElement = focusComponent.$el || focusComponent;

        if (focusElement.focus) {
            focusElement.focus();
        }
    }
}
