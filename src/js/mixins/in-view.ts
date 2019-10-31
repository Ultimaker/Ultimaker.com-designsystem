import { Component, Vue } from 'vue-property-decorator';
import BrowserCapabilities from 'utils/browser-capabilities';
import ViewportUtil from 'utils/viewport';

@Component({
    name: 'in-view',
})
export class InView extends Vue {
    public inView: boolean = false;
    public inViewObserver?: IntersectionObserver;
    public inViewOptions: IntersectionObserverInit = {};
    public viewportUtil = new ViewportUtil();

    /**
     * @link https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
     */
    public intersectionHandler(entries: IntersectionObserverEntry[]): void {
        if (entries.length) {
            const entry = entries.slice(-1)[0];
            this.setInView(entry.isIntersecting);
        }
    }

    public intersectionPolyHandler(): void {
        const windowBottom = this.viewportUtil.scrollY + this.viewportUtil.screenHeight;
        const pictureBounds = this.$el.getBoundingClientRect();
        const pictureTop = this.viewportUtil.scrollY + pictureBounds.top;
        const pictureBottom = pictureTop + pictureBounds.height;

        this.setInView(this.viewportUtil.scrollY <= pictureBottom && windowBottom >= pictureTop);
    }

    public removeObservers(): void {
        if (this.inViewObserver) {
            this.inViewObserver.unobserve(this.$el);
        } else {
            this.viewportUtil.removeResizeHandler(this.intersectionPolyHandler);
            this.viewportUtil.removeScrollHandler(this.intersectionPolyHandler);
        }
    }

    public setInView(inView): void {
        if (this.inView) {
            this.removeObservers();
            return;
        }

        this.inView = inView;
    }

    public setInViewOptions(options: IntersectionObserverInit): void {
        this.inViewOptions = options;
    }

    public mounted(): void {
        if (!BrowserCapabilities.supportsIntersectionObserver) {
            this.viewportUtil.addResizeHandler(this.intersectionPolyHandler);
            this.viewportUtil.addScrollHandler(this.intersectionPolyHandler);
            return;
        }

        this.inViewObserver = new IntersectionObserver(this.intersectionHandler, this.inViewOptions);
        this.inViewObserver.observe(this.$el);
    }

    public beforeDestroy(): void {
        this.removeObservers();
    }
}
