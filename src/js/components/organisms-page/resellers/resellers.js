import {TweenLite} from 'gsap';
import {Power3} from 'gsap';
import Defaults from 'constants/defaults';

const resellerCardTransitionDuration = Defaults.defaultDuration,
    resellerCardOffset = Defaults.buildingUnit * 5,
    cardsYPos = [],
    delay = 100;

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
            const rect = el.getBoundingClientRect(),
                index = el.dataset.index - this.showMax;

            cardsYPos.push(rect.top);

            if (cardsYPos.length > 1) {
                return cardsYPos[index - 1] !== cardsYPos[index];
            }

            return false;
        },
        setDelay(el) {
            if (this.newRow(el)) {
                rowIndex++;
            }

            return rowIndex * delay;
        },
        beforeEnter(el) {
            TweenLite.set(el, {opacity: 0, y: resellerCardOffset});
        },
        enter(el, done) {
            setTimeout(function() {
                TweenLite.fromTo(el, resellerCardTransitionDuration, {opacity: 0, y: resellerCardOffset}, {
                    opacity: 1,
                    y: 0,
                    ease: Power3.easeOut,
                    onComplete: done
                });
            }, this.setDelay(el));
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
