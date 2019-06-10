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
    tooltipLeft:boolean = true;
    yAxisCorrection:number = 0;

    get tooltipClass() {
        return {
            'tooltip--arrow-left': this.tooltipLeft,
        };
    }

    show():void {
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

    hide() {
        this.visible = false;
    }

    tooltipEnter(el, done) {
        const tooltipElement = <HTMLElement> el;

        TweenLite
            .fromTo(tooltipElement, this.duration,
                { autoAlpha: 0, x: 0, y: this.buildingUnit * -1 },
                { autoAlpha: 1, x: 0, y: 0, ease: this.ease })
            .eventCallback('onComplete', done);
    }

    tooltipLeave(el, done) {
        TweenLite
            .to(el, this.duration, { autoAlpha: 0, y: this.buildingUnit * -1, ease: this.ease })
            .eventCallback('onComplete', done);
    }
}
