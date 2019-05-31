import Defaults from 'constants/defaults';
import { Component, Vue } from 'vue-property-decorator';
import { Power3, TweenLite } from 'gsap';

@Component

export class StepRowAnimation extends Vue {
    lastTopValue: number = 0;
    delayIncrement: number = 0.1;
    rowIndex: number = 0;
    increment: number = 1;
    cardTransitionDuration: number = Defaults.defaultDuration;
    cardOffset: number = Defaults.buildingUnit * 5;

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

    isNewRow(topValue: number): boolean {
        return this.lastTopValue !== topValue;
    }
}
