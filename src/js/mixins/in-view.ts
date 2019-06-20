import { Component, Prop, Vue } from 'vue-property-decorator';
import BrowserCapabilities from 'utils/browser-capabilities';
import ViewportUtil from 'utils/viewport';

@Component
export class InView extends Vue {
    @Prop({ type: Boolean, default: true })
    keepInView!: boolean;

    $el!: Element;
    inView: boolean = false;
    inViewObserver?: IntersectionObserver;
    inViewOptions: IntersectionObserverInit = {};
    viewportUtil = new ViewportUtil();

    intersectionHandler(entries) {
        if (entries.length) {
            const entry = entries.slice(-1)[0];
            this.setInView(entry.isIntersecting);
        }
    }

    intersectionPolyHandler() {
        const windowBottom = this.viewportUtil.scrollY + this.viewportUtil.screenHeight;
        const pictureBounds = this.$el.getBoundingClientRect();
        const pictureTop = this.viewportUtil.scrollY + pictureBounds.top;
        const pictureBottom = pictureTop + pictureBounds.height;

        this.setInView(this.viewportUtil.scrollY <= pictureBottom && windowBottom >= pictureTop);
    }

    setInView(inView) {
        if (this.inView && this.keepInView) { return; }
        this.inView = inView;
    }

    setInViewOptions(options:IntersectionObserverInit):void {
        this.inViewOptions = options;
    }

    mounted() {
        if (!BrowserCapabilities.supportsIntersectionObserver) {
            this.viewportUtil.addResizeHandler(this.intersectionPolyHandler);
            this.viewportUtil.addScrollHandler(this.intersectionPolyHandler);

            return;
        }

        this.inViewObserver = new IntersectionObserver(this.intersectionHandler, this.inViewOptions);
        this.inViewObserver.observe(this.$el);
    }

    beforeDestroy() {
        if (this.inViewObserver) {
            this.inViewObserver.unobserve(this.$el);
        } else {
            this.viewportUtil.removeResizeHandler(this.intersectionPolyHandler);
            this.viewportUtil.removeScrollHandler(this.intersectionPolyHandler);
        }
    }
}
