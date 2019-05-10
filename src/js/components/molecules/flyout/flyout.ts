import { Vue, Component, Prop } from 'vue-property-decorator';
import { NavigationItem } from '@ultimaker/ultimaker.com-model-definitions/dist/molecules/navigation-item/NavigationItem';
import ViewportUtility from 'utils/viewport';

@Component({
    name: 'flyout',
    template: require('./flyout.vue.html'),
})

export default class Flyout extends Vue {
    @Prop({ type: Array, required: true }) items!: NavigationItem[];
    @Prop({ type: Boolean, required: false }) isCompact?: boolean;
    @Prop({ type: Boolean, required: false, default: false }) disableKeyboardEvents?: boolean;

    sectionIndex: number = 0;
    viewportUtil: any = new ViewportUtility();

    get flyoutSections() {
        return Array.isArray(this.$refs.items) ? this.$refs.items : [this.$refs.items];
    }

    open(): void {
        this.$emit('open');
    }

    close(): void {
        this.reset();
        this.$emit('close');
    }

    backToParent(): void {
        this.$emit('main');
        this.close();
    }

    reset(): void {
        this.sectionIndex = 0;
        // @ts-ignore
        this.flyoutSections.forEach(s => s && s.reset && s.reset());
    }

    async selectFirstLink(): Promise<any> {
        this.reset();
        await this.$nextTick();
        // @ts-ignore
        this.flyoutSections[this.sectionIndex].selectFirstLink();
    }

    selectNextLink(e): void {
        if (this.disableKeyboardEvents) {
            return;
        }

        e.preventDefault();
        // @ts-ignore
        const hasNext = this.flyoutSections[this.sectionIndex].selectNextLink();

        if (!hasNext) {
            // @ts-ignore
            this.selectNextSection();
        }
    }

    selectPrevLink(e): void {
        if (this.disableKeyboardEvents) {
            return;
        }

        if (typeof e !== 'undefined') {
            e.preventDefault();
        }

        // @ts-ignore
        const hasPrev = this.flyoutSections[this.sectionIndex].selectPrevLink();

        if (!hasPrev) {
            // @ts-ignore
            this.selectPrevSection();
        }
    }

    selectNextSection(e, keepIndex) {
        if (this.disableKeyboardEvents) {
            return;
        }

        if (typeof e !== 'undefined') {
            e.preventDefault();
        }

        if (this.sectionIndex >= this.flyoutSections.length - 1) {
            return this.backToParent();
        }

        const currentSection = this.sectionIndex;
        // @ts-ignore
        const currentLinkIndex = this.flyoutSections[this.sectionIndex].focusIndex;

        this.sectionIndex = this.sectionIndex + 1;

        if (keepIndex) {
            // @ts-ignore
            this.flyoutSections[this.sectionIndex].setFocusIndex(currentLinkIndex);
        } else {
            // @ts-ignore
            this.flyoutSections[this.sectionIndex].selectFirstLink();
        }

        // @ts-ignore
        this.flyoutSections[currentSection].reset();
    }

    selectPrevSection(e, keepIndex) {
        if (this.disableKeyboardEvents) {
            return;
        }

        if (typeof e !== 'undefined') {
            e.preventDefault();
        }

        if (this.sectionIndex <= 0) {
            return this.backToParent();
        }

        const currentSection = this.sectionIndex;
        // @ts-ignore
        const currentLinkIndex = this.flyoutSections[this.sectionIndex].focusIndex;

        this.sectionIndex = this.sectionIndex - 1;

        if (keepIndex) {
            // @ts-ignore
            this.flyoutSections[this.sectionIndex].setFocusIndex(currentLinkIndex);
        } else {
            // @ts-ignore
            this.flyoutSections[this.sectionIndex].selectLastLink();
        }

        // @ts-ignore
        this.flyoutSections[currentSection].reset();
    }
}
