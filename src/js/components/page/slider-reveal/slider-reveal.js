import Vue from 'vue';
import ViewportUtil from 'utils/viewport';
import {TweenLite, TimelineLite, Power2} from 'gsap';

export default Vue.component('slider-reveal', {
    name: 'slider-reveal',
    template: require('./slider-reveal.html'),
    props: {
        styleModifiers: {
            type: Array,
            required: false
        },
        title: {
            type: String,
            required: false
        },
        contents: {
            type: Array,
            required: true
        },
        imageSlider: {
            type: Object,
            required: true
        },
        link: {
            type: Object,
            required: false
        }
    },
    computed: {
        hasLink() {
            return this.link && this.link.text;
        }
    },
    data() {
        return {
            isMobile: false,
            itemOffsetY: 0,
            itemHeight: 0,
            prevItemHeight: 0,
            screenCenterY: 0,
            timeLine: null,
            viewportUtil: new ViewportUtil()
        };
    },
    mounted() {
        this.$nextTick(() => this.initialize());
    },
    beforeDestroy() {
        this.removeEventListeners();
    },
    methods: {
        initialize() {
            this.resize();
            this.scroll();
            this.addEventListeners();
        },
        addEventListeners() {
            this.viewportUtil.addScrollHandler(this.scrollHandler);
            this.viewportUtil.addResizeHandler(this.resizeHandler);
        },
        removeEventListeners() {
            this.viewportUtil.removeScrollHandler(this.scrollHandler);
            this.viewportUtil.removeResizeHandler(this.resizeHandler);
        },
        getOffsetForElement(el) {
            // TODO: Maybe put this in a util so we can reuse;
            const rect = el.getBoundingClientRect();
            const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

            return {top: rect.top + scrollTop, left: rect.left + scrollLeft};
        },

        calculateOffsets() {
            if (this.$refs['image-mask'][0]) {
                this.itemOffsetY = this.getOffsetForElement(this.$refs['image-mask'][0]);
                this.itemHeight = this.$refs['image-wrapper'].getBoundingClientRect().height;
                this.screenCenterY = window.innerHeight * 0.5;
            }
        },
        setupTimeLine() {
            if (this.itemHeight !== this.prevItemHeight) {
                this.prevItemHeight = this.itemHeight;

                this.timeLine = new TimelineLite({paused: true});
                this.timeLine.fromTo(this.$refs['image-mask'][1], 0.2, {height: 0}, {height: this.itemHeight, ease: Power2.easeInOut});
            }
        },
        resize() {
            this.isMobile = this.viewportUtil.isMobile;

            this.calculateOffsets();
            this.setupTimeLine();
            this.scroll();
        },
        scroll() {
            let progress = 0;
            let diff = (this.itemOffsetY.top - this.viewportUtil.scrollY) - this.screenCenterY + this.itemHeight;

            diff = diff < 0 ? 0 : diff;
            diff = diff > this.itemHeight ? this.itemHeight : diff;
            progress = (diff / this.itemHeight);

            TweenLite.to(this.timeLine, 0.2, {progress: progress});
        },
        resizeHandler() {
            this.resize();
        },
        scrollHandler() {
            this.scroll();
        }
    }
});
