import { Vue, Component, Prop } from 'vue-property-decorator';
import { TweenLite, Power3 } from 'gsap';
import Defaults from 'constants/defaults';

import ViewportUtil from 'utils/viewport';
import BrowserCapabilities from 'utils/browser-capabilities';

import { IMaterialProps, IMaterials, IMaterialTranslations } from './material.models';

@Component({
    name: 'materials',
    template: require('./materials.html'),
})

export default class Materials extends Vue implements IMaterialProps {
    @Prop({ type: String, required: true })
        title!: string;
    @Prop({ type: Array, required: true })
        materials!:  IMaterials;
    @Prop({ type: Object, required: true })
        labels!: IMaterialTranslations;

    cardTransitionDuration: number = Defaults.defaultDuration;
    cardOffset: number = Defaults.buildingUnit * 5;

    showHiddenItems: boolean = false;
    showMax: number = 6;
    lastTopValue: number = 0;
    delayIncrement: number = 0.1;
    rowIndex: number = 0;
    incement: number = 1;

    viewportUtil: ViewportUtil = new ViewportUtil();

    showCount (): string {
        if (!this.showHiddenItems) {
            return `${this.labels.showAll} (${this.materials.length})`;
        }
        return this.labels.showAll;
    }

    showHidden(): void {
        this.showHiddenItems = true;
    }

    isNewRow(topValue: number): boolean {
        return this.lastTopValue !== topValue;
    }

    addRow(topValue: number): void {
        this.rowIndex = this.rowIndex + this.incement;
        this.lastTopValue = topValue;
    }

    beforeEnter(el: HTMLElement): void {
        TweenLite.set(el, { opacity: 0, y: this.cardOffset });
    }

    enter(el: HTMLElement, done: boolean): void {
        const elTopValue: number = el.getBoundingClientRect().top;

        if (this.isNewRow(elTopValue)) {
            this.addRow(elTopValue);
        }

        TweenLite.fromTo(el, this.cardTransitionDuration, {
            opacity: 0,
            y: this.cardOffset,
        },               {
            opacity: 1,
            y: 0,
            ease: Power3.easeOut,
            onComplete: done,
            delay: this.rowIndex * this.delayIncrement,
        });
    }

    handleResize(): void {
        if (!this.showHiddenItems && this.viewportUtil.isMobile) {
            this.showMax = 3;
        } else {
            this.showMax = 6;
        }
    }

    beforeMount(): void {
        this.viewportUtil.addResizeHandler(this.handleResize);

        if (BrowserCapabilities.isBrowser) {
            this.handleResize();
        }

        this.viewportUtil.triggerResize();

        setTimeout(() => {
            this.handleResize();
        },         100);
    }

    beforeDestroy(): void {
        this.viewportUtil.removeResizeHandler(this.handleResize);
    }
}
