import Vue from 'vue';

export default Vue.component('faux-scroll', {
    name: 'faux-scroll',
    template: require('./faux-vertical-scroll.html'),
    data: () => ({
        drag: {
            active: false,
            hasDragged: false,
            startX: 0,
            lastOffset: 0,
            maxOffset: 0
        },
        bar: {
            left: 0,
            scale: 100
        },
        posX: 0
    }),
    computed: {
        barStyle() {
            return {
                display: this.bar.scale < 100 ? 'block' : 'none',
                opacity: this.drag.active ? 1 : 0,
                width: `${ this.bar.scale }%`
            };
        }
    },
    methods: {
        click(e) {
            if (!this.drag.hasDragged) {
                return;
            }
            e.preventDefault();
            e.stopPropagation();
        },
        mousedown(e) {
            e.preventDefault();
            e.stopPropagation();

            this.drag.startX = e.clientX;
            this.setActive();
        },
        mouseup(e) {
            this.setInactive();
        },
        mousemove(e) {
            if (!this.drag.active) {
                return;
            }
            this.calculateScrollState(this.drag.startX - e.clientX);
        },
        touchstart(e) {
            if (!e.changedTouches.length) {
                return;
            }
            this.drag.startX = e.changedTouches[0].pageX;
            this.setActive();
        },
        touchend(e) {
            this.setInactive();
        },
        touchmove(e) {
            if (!this.drag.active || !e.changedTouches.length) {
                return;
            }
            e.preventDefault();
            e.stopPropagation();
            this.calculateScrollState(this.drag.startX - e.changedTouches[0].pageX);
        },
        setActive() {
            this.drag.active = true;
            this.drag.hasDragged = false;
            this.drag.maxOffset = this.$el.scrollWidth - this.$el.offsetWidth;

            window.requestAnimationFrame(this.updateScrollState);
        },
        setInactive() {
            this.posX = this.drag.lastOffset;
            this.drag.active = false;
        },
        updateScrollState() {
            const left = (this.drag.lastOffset * (this.bar.scale / 100)) + this.bar.left;

            this.$el.scrollLeft = this.drag.lastOffset;
            this.$refs.bar.style.transform = `translateX(${ left }px)`;
            if (this.drag.active) {
                window.requestAnimationFrame(this.updateScrollState);
            }
        },
        calculateScrollState(offset) {
            let totalOffset = offset + this.posX;
            const scale = this.$el.offsetWidth / this.$el.scrollWidth * 100;

            if (totalOffset > this.drag.maxOffset) {
                totalOffset = this.drag.maxOffset;
            } else if (totalOffset < 0) {
                totalOffset = 0;
            }

            this.bar.left = totalOffset;
            this.bar.scale = scale;
            this.drag.hasDragged = true;
            this.drag.lastOffset = totalOffset;
        }
    }
});
