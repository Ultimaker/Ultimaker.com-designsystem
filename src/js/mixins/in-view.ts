import { Component, Prop, Vue } from 'vue-property-decorator';
import BrowserCapabilities from 'utils/browser-capabilities';
import ViewportUtil from 'utils/viewport';

@Component
export class InView extends Vue {
    @Prop({ type: Boolean, default: true })
    keepInView!: boolean;

    $el!: Element;
    inView: boolean = false;
    inViewObserver: IntersectionObserver = new IntersectionObserver(this.intersectionHandler);
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

    mounted() {
        if (!BrowserCapabilities.supportsIntersectionObserver) {
            this.viewportUtil.addResizeHandler(this.intersectionPolyHandler);
            this.viewportUtil.addScrollHandler(this.intersectionPolyHandler);

            return;
        }

        this.inViewObserver.observe(this.$el);
    }

    beforeDestroy() {
        if (!BrowserCapabilities.supportsIntersectionObserver) {
            const viewportUtil = new ViewportUtil();

            viewportUtil.removeResizeHandler(this.intersectionPolyHandler);
            viewportUtil.removeScrollHandler(this.intersectionPolyHandler);

            return;
        }

        this.inViewObserver.unobserve(this.$el);
    }
}
