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
    readonly ease: string = defaults.defaultEase;

    visible:boolean = false;
    tooltipLeft:boolean = false;
    yAxisCorrection:number = 0;

    get tooltipClass() {
        console.log(this.$slots);
        return {
            'tooltip--arrow-left': this.$slots.default || this.tooltipLeft,
        };
    }

    async show():Promise<void> {
        this.visible = true;
    }

    toggleTooltip():void {
        if (!this.visible) {
            this.show();
        } else {
            this.hide();
        }
    }

    hideTooltip(): void {
        this.hide();
    }

    async hide():Promise<void> {
        // this.visible = false;
    }

    tooltipEnter(el, done) {
        const tooltipElement = <HTMLElement> el;
        const clickableElement = this.$refs.button.$el;
        const { height: elementHeight } = <DOMRect> clickableElement.getBoundingClientRect();

        this.yAxisCorrection = 0; // elementHeight + (this.buildingUnit / 2);

        TweenLite
            .fromTo(tooltipElement, this.duration,
                { autoAlpha: 0, x: 0, y: this.yAxisCorrection - this.buildingUnit },
                { autoAlpha: 1, x: 0, y: this.yAxisCorrection, ease: this.ease })
            .eventCallback('onComplete', done);
    }

    tooltipLeave(el, done) {
        const { height } = <DOMRect> el.getBoundingClientRect();
        TweenLite
            .to(el, this.duration, { autoAlpha: 0, y: this.yAxisCorrection - this.buildingUnit, ease: this.ease })
            .eventCallback('onComplete', done);
    }
}
