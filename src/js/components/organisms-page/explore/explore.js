import {mapGetters} from 'vuex';
import {TweenLite} from 'gsap';
import {Power0} from 'gsap';

const defaultAnimationDuration = 1;

export default {
    name: 'explore',
    template: require('./explore.html'),
    data: () => ({
        activeSlide: 0
    }),
    props: {
        title: {
            type: String,
            required: true
        },
        items: {
            type: Array,
            required: true
        }
    },
    computed: {
        ...mapGetters('page', ['page']),
        isMobile() {
            return false;
        },
        buttons() {
            return {
                next: {
                    label: 'next',
                    iconName: 'arrow-down'
                },
                previous: {
                    label: 'previous',
                    iconName: 'arrow-up'
                }
            };
        }
    },
    methods: {
        indexChanged(payload) {
            this.activeSlide = payload.index;
        },
        navClicked(direction) {
            const maxItems = this.items.length;

            if (direction === 'previous') {
                this.activeSlide = (--this.activeSlide < 0 ) ? maxItems -1 : this.activeSlide;
            } else {
                this.activeSlide = (++this.activeSlide > maxItems-1 ) ? 0 : this.activeSlide;
            }
        },
        imageEnter(image, done) {
            TweenLite.fromTo(
                image, defaultAnimationDuration,
                {opacity: 0}, {opacity: 1, ease: Power0.easeIn, onComplete: done}
            );
        },
        imageLeave(image, done) {
            TweenLite.to(image, defaultAnimationDuration,
                {opacity: 0, ease: Power0.easeOut, onComplete: done}
            );
        }
    }
};
