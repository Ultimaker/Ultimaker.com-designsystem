import {TweenLite} from 'gsap';
import {Power3} from 'gsap';
import {Power0} from 'gsap';
import Viewport from 'utils/viewport';
import Defaults from 'constants/defaults';

export default {
    name: 'tabbable-definition-list',
    template: require('./tabbable-definition-list.html'),
    data: () => ({
        viewport: new Viewport(),
        heights: []
    }),
    props: {
        items: {
            type: Array,
            default: () => []
        },
        activeIndex: {
            type: Number,
            default: 0
        }
    },
    watch: {
        items() {
            this.updateElementPositions();
        },
        activeIndex(newValue, oldValue) {
            this.killTweensAndCompleteOf(this.$refs.terms);
            this.killTweensAndCompleteOf(this.$refs.descriptions);

            const duration = 0.4,
                direction = this.getDirection(oldValue, newValue),
                height = this.heights[newValue],
                delay = this.viewport.isMobile ? duration * 0.6 : 0,
                descriptionHeight = (this.viewport.isMobile ? height.dt : 0) + height.dd + (Defaults.buildingUnit * 2.5),
                elementsToHide = !this.viewport.isMobile ? this.$refs.descriptions[oldValue] :
                    [this.$refs.terms[oldValue], this.$refs.descriptions[oldValue]];

            // Animate current text up
            // Open New Item
            TweenLite.to(elementsToHide, duration, {height: 0, y: 20 * direction, ease: Power3.easeOut});
            TweenLite.fromTo(elementsToHide, duration * 0.3, {autoAlpha: 1}, {autoAlpha: 0, ease: Power0.easeNone});

            // Close current item
            // Animate next text up
            TweenLite.fromTo(this.$refs.descriptions[newValue], duration, {height: 0, y: -20 * direction}, {height: descriptionHeight, y: 0, ease: Power3.easeOut, delay: delay});
            TweenLite.fromTo(this.$refs.descriptions[newValue], duration * 0.3, {autoAlpha: 0}, {autoAlpha: 1, ease: Power0.easeNone, delay: delay});
            if (this.viewport.isMobile) {
                TweenLite.fromTo(this.$refs.terms[newValue], duration, {height: 0, y: -20 * direction}, {height: height.dt, y: 0, ease: Power3.easeOut, delay: delay});
                TweenLite.fromTo(this.$refs.terms[newValue], duration * 0.3, {autoAlpha: 0}, {autoAlpha: 1, ease: Power0.easeNone, delay: delay});
            }
        }
    },
    methods: {
        changeIndex(index) {
            this.$emit('index-changed', {index});
        },
        getDirection(oldValue, newValue) {
            if (this.viewport.isMobile) {
                if (oldValue < newValue) {
                    return (newValue - (this.$refs.terms.length -1) === oldValue) ? 1 : -1;
                }

                return (oldValue - (this.$refs.terms.length -1) === newValue) ? -1 : 1;
            }

            return (oldValue < newValue) ? -1 : 1;
        },
        killTweensAndCompleteOf(elements) {
            const tweens = TweenLite.getTweensOf(elements);

            if (tweens) {
                for (let i = 0, leni = tweens.length; i < leni; i++ ) {
                    tweens[i].seek(tweens[i].duration());
                }
                TweenLite.killTweensOf(tweens);
            }
        },
        renderItemOffscreen(item) {
            item.style.display = 'block';
            item.style.position = 'relative';
            item.style.left = '-9999px';
            item.style.height = 'auto';
            item.style.transform = '';
        },
        resetItemPosition(item) {
            item.style.position = '';
            item.style.display = '';
            item.style.left = '';
        },
        calculateDimensions() {
            this.heights = [];

            if (!this.$refs.descriptions || !this.$refs.descriptions.length) {
                return;
            }

            /** REMARK **
             * Trying to prevent layout trashing by first
             * 1. position dom elements
             * 2. read values
             * 3. reset elements
             *
             * Doing these steps for each elements causes a lot more layout calculations
             */

            // 1. position dom elements
            this.$refs.terms.forEach((element) => {
                this.renderItemOffscreen(element);
            });
            this.$refs.descriptions.forEach((element) => {
                element.style.marginBottom = '0'; // Margin is added by adding 24px to the height; see 'elementHeight';
                this.renderItemOffscreen(element);
            });

            // 2. read values (measure heights)
            this.$refs.descriptions.map((element) => {
                const currentHeight = {
                    dt: element.previousElementSibling.getBoundingClientRect().height,
                    dd: element.getBoundingClientRect().height
                };

                this.heights.push(currentHeight);
            });

            // 3. reset elements (restore elements)
            this.$refs.terms.forEach((element, index) => {
                this.resetItemPosition(element);

                if (this.viewport.isMobile) {
                    element.style.opacity = (index === this.activeIndex) ? '1' : '0';
                    element.style.visibility = (index === this.activeIndex) ? 'visible' : 'hidden';
                } else {
                    element.style.opacity = '1';
                    element.style.visibility = 'visible';
                }
            });

            this.$refs.descriptions.forEach((element, index) => {
                this.resetItemPosition(element, index);

                if (index !== this.activeIndex) {
                    element.style.height = '0';
                    element.style.opacity = '0';
                    element.style.visibility = 'hidden';
                }
            });
        },
        updateElementPositions() {
            const currentElement = this.$refs.descriptions[this.activeIndex];

            currentElement.style.height = '';

            const currentElementHeight = currentElement.getBoundingClientRect().height,
                isMobile = this.viewport.isMobile;

            this.$el.style.height = 'auto';
            this.calculateDimensions();

            const maxElementHeight = isMobile ? this.maxHeight : this.$el.getBoundingClientRect().height + this.maxHeight - currentElementHeight,
                height = this.heights[this.activeIndex];

            this.$refs.descriptions.forEach((element, index) => {
                element.style.top = isMobile ? `${ this.heights[index].dt + (Defaults.buildingUnit * 2.5) }px` : 0;
            });

            if (isMobile) {
                currentElement.style.height = `${ height.dt + height.dd + (Defaults.buildingUnit * 2.5) }px`;
            } else {
                currentElement.style.height = `${ height.dd + (Defaults.buildingUnit * 2.5) }px`;
            }
            this.$el.style.height = `${ maxElementHeight + (Defaults.buildingUnit * 0.5) }px`;
        }
    },
    computed: {
        maxHeight() {
            if (!this.heights.length) {
                return 0;
            }
            if (this.viewport.isMobile) {
                return Math.max(...this.heights.map(i => i.dt + (Defaults.buildingUnit * 2.5) + i.dd));
            }

            return Math.max(...this.heights.map(i => i.dd));
        }
    },
    mounted() {
        this.updateElementPositions();
        this.viewport.addResizeHandler(this.updateElementPositions);
    },
    beforeDestroy() {
        this.viewport.removeResizeHandler(this.updateElementPositions);
    }
};
