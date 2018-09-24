import {TweenLite} from 'gsap';
import {Power3} from 'gsap';
import Defaults from 'constants/defaults';

const resellerCardTransitionDuration = Defaults.defaultDuration,
    resellerCardOffset = Defaults.buildingUnit * 5;

export default {
    name: 'resellers',
    template: require('./resellers.html'),
    data: () => ({
        visibleAllAuthorizedResellers: false,
        visibleTooltipPreferred: false,
        showMax: 6,
        lastTopValue: 0,
        delayIncrement: 0.1,
        rowIndex: 0
    }),
    props: {
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
        isNewRow(topValue) {
            return this.lastTopValue !== topValue;
        },
        addRow(topValue) {
            this.rowIndex++;
            this.lastTopValue = topValue;
        },
        beforeEnter(el) {
            TweenLite.set(el, {opacity: 0, y: resellerCardOffset});
        },
        enter(el, done) {
            const elTopValue = el.getBoundingClientRect().top;

            if (this.isNewRow(elTopValue)) {
                this.addRow(elTopValue);
            }

            TweenLite.fromTo(el, resellerCardTransitionDuration, {
                opacity: 0,
                y: resellerCardOffset
            }, {
                opacity: 1,
                y: 0,
                ease: Power3.easeOut,
                onComplete: done,
                delay: this.rowIndex * this.delayIncrement
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
