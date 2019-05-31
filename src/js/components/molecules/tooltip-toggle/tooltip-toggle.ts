import { Vue, Component, Prop } from 'vue-property-decorator';
import { TweenLite, Power2 } from 'gsap';

import defaults from 'constants/defaults';
import { TooltipToggleProps } from './tooltip-toggle.models';
import WithRender from './tooltip-toggle.vue.html';

@WithRender
@Component({
    name: 'TooltipToggle',
})

export class TooltipToggle extends Vue implements TooltipToggleProps {
    @Prop({ type: String, required: true })
    label!: string;
    @Prop({ type: String, required: true })
    icon!: string;
    @Prop({ type: String, required: true })
    description!: string;

    $refs!: {
        button: Vue;
        tooltip: Vue;
    };
    readonly buildingUnit:number = defaults.buildingUnit;
    readonly duration: number = defaults.defaultDuration;
    visible:boolean = false;
    tooltipLeft:boolean = false;

    get tooltipClass() {
        return {
            'tooltip--arrow-left': this.tooltipLeft,
        };
    }

    async show():Promise<void> {
        this.visible = true;
    }

    toggle(): void {
        if (!this.visible) {
            this.show();
        } else {
            this.hide();
        }
    }

    hide():void {
        this.visible = false;
    }

    tooltipEnter(el, done) {
        const tooltipElement = <HTMLElement> el;
        const iconElement = <HTMLElement> this.$refs.button.$el;
        const { height: tooltipHeight, width: tooltipWidth } = <DOMRect> tooltipElement.getBoundingClientRect();
        const { x: iconX, width: iconWidth } = <DOMRect> iconElement.getBoundingClientRect();

        const iconCenterOffset = iconWidth / 2;
        let xAxisCorrection = tooltipWidth / -2 + iconCenterOffset;

        if (iconX + xAxisCorrection < 0) {
            xAxisCorrection = 0;
            this.tooltipLeft = true;
        } else {
            this.tooltipLeft = false;
        }

        TweenLite
            .fromTo(tooltipElement, this.duration,
                { autoAlpha: 0, x: xAxisCorrection, y: this.buildingUnit * -1 },
                { autoAlpha: 1, x: xAxisCorrection, y: 0, ease: Power2.easeOut })
            .eventCallback('onComplete', done);
    }

    tooltipLeave(el, done) {
        const { height } = <DOMRect> el.getBoundingClientRect();
        TweenLite
            .to(el, this.duration, { autoAlpha: 0, y: this.buildingUnit * -1, ease: Power2.easeIn })
            .eventCallback('onComplete', done);
    }
}
