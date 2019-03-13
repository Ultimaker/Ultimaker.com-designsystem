import { Vue, Component, Prop, Watch } from 'vue-property-decorator';
import { TweenLite, Power3 } from 'gsap';
import Defaults from 'constants/defaults';

import ViewportUtil from 'utils/viewport';
import BrowserCapabilities from 'utils/browser-capabilities';

import { ListSection as IListSection } from '@ultimaker/ultimaker.com-model-definitions/dist/molecules/sections/ListSection';
import Events from 'constants/events';

@Component({
    name: 'ListSection',
    template: require('./list-section.html'),
})

export default class ListSection extends Vue implements IListSection {
    @Prop({ type: String, required: false }) title?: IListSection['title'];
    @Prop({ type: Array, required: true }) cards!: IListSection['cards'];
    @Prop({ type: Object, required: false }) tooltip?: IListSection['tooltip'];
    @Prop({ type: Object, required: false }) limit?: IListSection['limit'];
    @Prop({ type: Object, required: false }) expand?: IListSection['expand'];

    cardTransitionDuration: number = Defaults.defaultDuration;
    cardOffset: number = Defaults.buildingUnit * 5;

    showHiddenItems: boolean = false;
    visibleTooltip: boolean = false;

    showMax: number = Number.MAX_SAFE_INTEGER;

    lastTopValue: number = 0;
    delayIncrement: number = 0.1;
    rowIndex: number = 0;
    incement: number = 1;

    $emitPublic;
    viewportUtil: ViewportUtil = new ViewportUtil();

    get clickEventType() {
        return Events.click;
    }

    get clickEventData() {
        if (this.expand && this.expand.clickEvent) {
            const { clickEvent } = this.expand;

            return {
                dataType: clickEvent.name,
                data: clickEvent.data,
            };
        }
        return null;
    }

    tooltipVisible() {
        return this.visibleTooltip;
    }

    hideTooltip() {
        this.visibleTooltip = false;
    }

    toggleTooltip() {
        this.visibleTooltip = !this.visibleTooltip;
    }

    showCount (): string {
        if (!this.showHiddenItems) {
            return `${this.expand && this.expand.label ? this.expand.label : ''} (${this.cards.length})`;
        }
        return this.expand && this.expand.label || '';
    }

    triggerEventClick (): void {
        if (this.expand && this.expand.clickEvent) {
            this.$emitPublic(this.clickEventType, this.clickEventData);
        }
    }

    showHidden(): void {
        this.triggerEventClick();
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
            this.showMax = (
                this.limit && typeof this.limit.smallScreen === 'number' ? this.limit.smallScreen : Number.MAX_SAFE_INTEGER
            );
        } else {
            this.showMax = (
                this.limit && typeof this.limit.largeScreen  === 'number' ? this.limit.largeScreen : Number.MAX_SAFE_INTEGER
            );
        }
    }

    mounted(): void {
        if (!BrowserCapabilities.isBrowser) {
            return;
        }

        this.viewportUtil.addResizeHandler(this.handleResize);
        this.handleResize();
        this.viewportUtil.triggerResize();

        setTimeout(() => {
            this.handleResize();
        },         100);
    }

    beforeDestroy(): void {
        this.viewportUtil.removeResizeHandler(this.handleResize);
    }
}
