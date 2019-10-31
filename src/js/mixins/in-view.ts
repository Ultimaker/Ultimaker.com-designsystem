import Vue from 'vue';
import BrowserCapabilities from 'utils/browser-capabilities';
import ViewportUtil from 'utils/viewport';

const InView = Vue.extend({
    data(): { inView: boolean; inViewObserver?: IntersectionObserver; inViewOptions: IntersectionObserverInit; removeObserverWhenInView: boolean, viewportUtil: ViewportUtil } {
        return {
            inView: false,
            inViewObserver: undefined,
            inViewOptions: {},
            removeObserverWhenInView: true,
            viewportUtil: new ViewportUtil(),
        };
    },
    methods: {
        intersectionHandler(entries): void {
            if (entries.length) {
                const entry = entries.slice(-1)[0];
                this.setInView(entry.isIntersecting);
            }
        },
        intersectionPolyHandler(): void {
            const windowBottom = this.viewportUtil.scrollY + this.viewportUtil.screenHeight;
            const pictureBounds = this.$el.getBoundingClientRect();
            const pictureTop = this.viewportUtil.scrollY + pictureBounds.top;
            const pictureBottom = pictureTop + pictureBounds.height;

            this.setInView(this.viewportUtil.scrollY <= pictureBottom && windowBottom >= pictureTop);
        },
        removeObservers(): void {
            if (this.inViewObserver) {
                this.inViewObserver.unobserve(this.$el);
            } else {
                this.viewportUtil.removeResizeHandler(this.intersectionPolyHandler);
                this.viewportUtil.removeScrollHandler(this.intersectionPolyHandler);
            }
        },
        setInView(inView): void {
            if (this.inView && this.removeObserverWhenInView) {
                this.removeObservers();
                return;
            }
            this.inView = inView;
        },
        setInViewOptions(options: IntersectionObserverInit): void {
            this.inViewOptions = options;
        },
    },
    mounted(): void {
        if (!BrowserCapabilities.supportsIntersectionObserver) {
            this.viewportUtil.addResizeHandler(this.intersectionPolyHandler);
            this.viewportUtil.addScrollHandler(this.intersectionPolyHandler);

            return;
        }

        this.inViewObserver = new IntersectionObserver(this.intersectionHandler, this.inViewOptions);
        this.inViewObserver.observe(this.$el);
    },
    beforeDestroy(): void {
        this.removeObservers();
    },
});

export default InView;
