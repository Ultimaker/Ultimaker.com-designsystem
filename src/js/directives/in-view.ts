import Vue, { DirectiveOptions } from 'vue';
import ViewportUtil from 'utils/viewport';
import BrowserCapabilities from 'utils/browser-capabilities';

export class InView implements DirectiveOptions {
    name:string = 'InView';
    $root!: Vue;

    bind(el, binding, vnode) {
        if (!vnode || !vnode.context) { return; }

        if (!BrowserCapabilities.supportsIntersectionObserver) {
            const viewportUtil = new ViewportUtil();
            const intersectionPolyHandler = () => InView.polyHandler(el, binding, viewportUtil);

            viewportUtil.addResizeHandler(intersectionPolyHandler);
            viewportUtil.addScrollHandler(intersectionPolyHandler);
            vnode.context.__intersectionPolyHandler = intersectionPolyHandler;

            return;
        }

        const observer = new IntersectionObserver(entries => InView.intersectionHandler(el, binding, entries));

        observer.observe(el);
        vnode.context.__intersectionObserver = observer;
    }

    static unbind(el, binding, vnode) {
        if (!vnode || !vnode.context) { return; }

        if (!BrowserCapabilities.supportsIntersectionObserver) {
            const viewportUtil = new ViewportUtil();

            viewportUtil.removeResizeHandler(vnode.context.__intersectionPolyHandler);
            viewportUtil.removeScrollHandler(vnode.context.__intersectionPolyHandler);

            return;
        }

        vnode.context.__intersectionObserver.unobserve(el);
    }

    static polyHandler(el, binding, viewportUtil) {
        const windowBottom = viewportUtil.scrollY + viewportUtil.screenHeight;
        const pictureBounds = el.getBoundingClientRect();
        const pictureTop = viewportUtil.scrollY + pictureBounds.top;
        const pictureBottom = pictureTop + pictureBounds.height;

        const inView = viewportUtil.scrollY <= pictureBottom && windowBottom >= pictureTop;

        InView.setInView(binding, inView);
    }

    static intersectionHandler(el, binding, entries) {
        const entry = entries.slice(-1)[0];
        InView.setInView(binding, entry.isIntersecting);
    }

    static setInView(binding, inView) {
        if (typeof binding.value === 'function') {
            binding.value(inView);
        }
    }
}
