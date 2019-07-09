import { Component, Prop, Vue } from 'vue-property-decorator';
import { Power3, TweenLite } from 'gsap';
import Defaults from 'constants/defaults';

import ViewportUtil from 'utils/viewport';
import { unique } from 'utils/functions';
import BrowserCapabilities from 'utils/browser-capabilities';

import { ListSection as IListSection } from '@ultimaker/ultimaker.com-model-definitions/dist/molecules/sections/ListSection';
import Events from 'constants/events';
import WithRender from './list-section.vue.html';

@WithRender
@Component({
    name: 'ListSection',
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
    increment: number = 1;

    $emitPublic;
    $route;
    viewportUtil: ViewportUtil = new ViewportUtil();

    defineCardTypesClass() {
        if (this.cards && this.cards.length) {
            // @ts-ignore
            const values = unique(this.cards.map((card:any) => card.type.toLowerCase()));
            return values.map(val => (val.match('card') ? 'list-section--cards' : 'list-section--blocks'));
        }
        return '';
    }

    get clickEventType() {
        return Events.click;
    }

    get clickEventData() {
        if (this.expand && this.expand.clickEvent) {
            const { clickEvent } = this.expand;

            return {
                dataType: clickEvent.name,
                data: {
                    ...clickEvent.data,
                    pageSlug: this.$route.fullPath,
                },
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

    showCount(): string {
        const { label } = this.limit && this.limit.expand ? this.limit.expand : { label: '' };

        if (!this.showHiddenItems) {
            return `${label} (${this.cards.length})`;
        }

        return label;
    }

    triggerEventClick(): void {
        if (this.expand && this.expand.clickEvent) {
            try {
                this.$emitPublic(this.clickEventType, this.clickEventData);
                // eslint-disable-next-line no-empty
            } catch (e) {}
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
        this.rowIndex = this.rowIndex + this.increment;
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
        }, {
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
                this.limit && typeof this.limit.largeScreen === 'number' ? this.limit.largeScreen : Number.MAX_SAFE_INTEGER
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
        }, 100);
    }

    beforeDestroy(): void {
        this.viewportUtil.removeResizeHandler(this.handleResize);
    }
}
