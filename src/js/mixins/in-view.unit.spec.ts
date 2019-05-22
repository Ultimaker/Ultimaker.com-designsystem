import { build } from 'vuenit';
import { InView } from './in-view';
import BrowserCapabilities from 'utils/browser-capabilities';
import ViewportUtil from 'utils/viewport';

describe('mixins', () => {
    describe('in-view', () => {
        const mount = build(InView, { props: {
            keepInView: true,
        } });

        it('should attach an intersection observer when supported', () => {
            spyOnProperty(BrowserCapabilities, 'supportsIntersectionObserver', 'get').and.returnValue(true);

            const vm = mount();
            expect(vm.inViewObserver).toBeDefined();
            spyOn(vm.inViewObserver, 'unobserve');
            vm.$destroy();
            expect(vm.inViewObserver.unobserve).toHaveBeenCalled();
        });

        it('should polyfill when interaction observer isn\'t supported', () => {
            const viewportUtil = new ViewportUtil();
            spyOn(viewportUtil, 'addResizeHandler');
            spyOn(viewportUtil, 'addScrollHandler');
            spyOn(viewportUtil, 'removeResizeHandler');
            spyOn(viewportUtil, 'removeScrollHandler');
            spyOnProperty(BrowserCapabilities, 'supportsIntersectionObserver', 'get').and.returnValue(false);

            const vm = mount();
            vm.$el = { getBoundingClientRect: () => ({ top: 0, height: 0 }) };
            vm.intersectionPolyHandler();
            expect(vm.inViewObserver).toBeUndefined();
            expect(viewportUtil.addResizeHandler).toHaveBeenCalled();
            expect(viewportUtil.addScrollHandler).toHaveBeenCalled();
            vm.$destroy();
            expect(viewportUtil.removeResizeHandler).toHaveBeenCalled();
            expect(viewportUtil.removeScrollHandler).toHaveBeenCalled();
        });

        it('should handle intersections', () => {
            spyOnProperty(BrowserCapabilities, 'supportsIntersectionObserver', 'get').and.returnValue(true);

            const vm = mount({
                props: {
                    keepInView: false,
                },
            });

            expect(vm.keepAlive).toBeFalsy();
            vm.intersectionHandler([{ isIntersecting: true }]);
            expect(vm.inView).toBeTruthy();
            vm.intersectionHandler([{ isIntersecting: false }]);
            expect(vm.inView).toBeFalsy();
            vm.$destroy();
        });
    });
});
