import { TimelineLite, TweenLite, Power3 } from 'gsap';
import ViewportUtil from 'utils/viewport';

export default {
    name: 'pager',
    template: require('./pager.html'),
    data: () => ({
        indicatorActive: false,
        viewport: new ViewportUtil(),
    }),
    props: {
        pages: {
            type: Number,
            required: true,
        },
        activeIndex: {
            type: Number,
            default: 0,
        },
    },
    methods: {
        resizeHandler() {
            this.moveToCurrentPosition();
        },
        getChangeOffset() {
            const indicatorRect = this.$refs.indicator.getBoundingClientRect();
            const indicatorOffsetRect = this.$refs.indicator.offsetParent.getBoundingClientRect();
            const currentPageRect = this.$refs.page[this.activeIndex].getBoundingClientRect();

            return {
                x: currentPageRect.left - indicatorOffsetRect.left,
                y: currentPageRect.top - indicatorOffsetRect.top,
                changeX: currentPageRect.left - indicatorRect.left,
                changeY: currentPageRect.top - indicatorRect.top,
            };
        },
        moveToCurrentPosition() {
            const { x, y } = this.getChangeOffset();

            TweenLite.to(this.$refs.indicator, 0, { x, y });
        },
        changeIndex(index) {
            this.$emit('index-changed', { index });
        },
        getAriaLabel(index) {
            let label = '';

            if (index === this.activeIndex) {
                label += '"current page, ';
            }

            label += `page ${index + 1}`;

            return label;
        },
    },
    watch: {
        activeIndex() {
            const tl = new TimelineLite();
            const offsets = this.getChangeOffset();

            tl
                .to(this.$refs.indicator, 0.2, { x: offsets.x - (offsets.changeX * 0.2), y: offsets.y - (offsets.changeY * 0.2), scaleX: 0.7, scaleY: 1.5 })
                .to(this.$refs.indicator, 0.2, { x: offsets.x, y: offsets.y, scaleX: 1, scaleY: 1 });
            TweenLite.to(tl, tl.duration, { ease: Power3.easeOut });
        },
    },
    mounted() {
        this.indicatorActive = true;
        this.moveToCurrentPosition();
        this.viewport.addResizeHandler(this.resizeHandler);
    },
    beforeDestroy() {
        this.viewport.removeResizeHandler(this.resizeHandler);
    },
};
