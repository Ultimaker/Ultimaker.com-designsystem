import {TweenLite} from 'gsap';
import {Power3} from 'gsap';
import Defaults from 'constants/defaults';

const resellerCardTransitionDuration = Defaults.defaultDuration,
    resellerCardOffset = Defaults.buildingUnit * 5,
    lastTopValue = 0,
    delay = 0.1;

let rowIndex = 0;

export default {
    name: 'resellers',
    template: require('./resellers.html'),
    data: () => ({
        visibleAllAuthorizedResellers: false,
        visibleTooltipPreferred: false,
        showMax: 6
    }),
    props: {
        title: {
            type: String,
            required: true
        },
        tooltip: {
            type: String
        },
        resellers: {
            type: Array,
            required: true
        },
        labels: {
            type: Object,
            required: true
        }
    },
    methods: {
        hideTooltipPreferred() {
            this.visibleTooltipPreferred = false;
        },
        toggleTooltipPreferred() {
            this.visibleTooltipPreferred = !this.visibleTooltipPreferred;
        },
        showAllAuthorizedResellers() {
            this.visibleAllAuthorizedResellers = true;
        },
        newRow(el) {
            const newTopValue = el.getBoundingClientRect().top;

            if (this.lastTopValue !== newTopValue) {
                this.lastTopValue = newTopValue;

                return true;
            }

            return false;
        },
        calculateAnimationDelay(el) {
            if (this.newRow(el)) {
                rowIndex++;
            }

            return rowIndex * delay;
        },
        beforeEnter(el) {
            TweenLite.set(el, {opacity: 0, y: resellerCardOffset});
        },
        enter(el, done) {
            TweenLite.fromTo(el, resellerCardTransitionDuration, {
                opacity: 0,
                y: resellerCardOffset
            }, {
                opacity: 1,
                y: 0,
                ease: Power3.easeOut,
                onComplete: done,
                delay: this.calculateAnimationDelay(el)
            });
        }
    },
    computed: {
        preferredResellersTooltipVisible() {
            return this.labels.preferredResellersInfoText && this.labels.preferredResellersInfoLabel;
        },
        resellersPreferred() {
            return this.resellers.filter(reseller => reseller.preferred === true);
        },
        resellersAuthorized() {
            return this.resellers.filter(reseller => reseller.preferred === false);
        }
    }
};
