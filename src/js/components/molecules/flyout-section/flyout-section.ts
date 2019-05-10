import { Vue, Component, Prop, Watch } from 'vue-property-decorator';
import { NavigationItem  } from '@ultimaker/ultimaker.com-model-definitions/dist/molecules/navigation-item/NavigationItem';

@Component({
    name: 'flyout-section',
    template: require('./flyout-section.vue.html'),
})

export default class Flyout extends Vue  {
    @Prop({ type: String, required: true }) label!: string;
    @Prop({ type: Array, required: false }) items?: NavigationItem[];

    @Prop({ type: Object, required: false }) bottomItem?: object;
    @Prop({ type: Boolean, required: false }) isCompact?: boolean;
    @Prop({ type: Number, required: false, default: 3 }) maxVisible?: number;
    @Prop({ type: Number, required: false, default: 6 }) maxItemsCol?: number;

    @Prop({ type: String, required: false, default: () => `flyout_title_${ ~~(Math.random() * 10000) }` }) itemId?: string;

    $refs!: {
        firstFocusableLinks: HTMLElement|HTMLElement[];
        focusable: HTMLElement|HTMLElement[];
        bottomLink: HTMLElement;
    };
    isExpanded: boolean =  false;
    focusIndex: null | number = null;
    columnClassDouble: string = 'flyout__section--2-columns';
    columnClassTriple: string = 'flyout__section--3-columns';

    get hasItems(): NavigationItem[] | undefined {
        return this.items;
    }

    get focusableItems() {
        const links = Array.isArray(this.$refs.firstFocusableLinks) ? this.$refs.firstFocusableLinks : [this.$refs.firstFocusableLinks];
        const otherFocusable = this.$refs.focusable;

        if (otherFocusable) {
            if (Array.isArray(otherFocusable)) {
                links.push(...otherFocusable);
            } else {
                links.push(otherFocusable);
            }
        }

        if (this.$refs.bottomLink) {
            links.push(this.$refs.bottomLink);
        }

        return links;
    }

    get moreThanMaxItems(): boolean {
        if (!this.items || !this.maxItemsCol) return false;
        return this.items.length > this.maxItemsCol;
    }

    get lessThanDoubleMaxItems(): boolean {
        if (!this.items || !this.maxItemsCol) return false;
        return this.items.length <= this.maxItemsCol * 2;
    }

    get moreThanDoubleMaxItems(): boolean {
        if (!this.items || !this.maxItemsCol) return false;
        return this.items.length > this.maxItemsCol * 2;
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
        if (!this.items || !this.maxVisible) return false;
        return this.isCompact && this.items.length > this.maxVisible;
    }

    toggleExpanded(): void {
        this.isExpanded = !this.isExpanded;
    }

    selectFirstLink(): void {
        this.focusIndex = 0;
    }

    selectLastLink(): void {
        this.focusIndex = this.focusIndex === null ? this.focusableItems.length - 1 : this.focusIndex - 1;
    }

    selectNextLink(): boolean {
        if (this.focusIndex === null) return false;
        if (this.focusIndex >= this.focusableItems.length - 1) {
            return false;
        }
        this.focusIndex = this.focusIndex + 1;

        return true;
    }

    selectPrevLink(): boolean {
        if (this.focusIndex === null) return false;
        if (this.focusIndex <= 0) {
            return false;
        }
        this.focusIndex = this.focusIndex - 1;

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
