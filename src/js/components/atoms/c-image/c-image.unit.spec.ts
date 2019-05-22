import 'babel-polyfill';
import { build } from 'vuenit';
import CImage from './c-image';
import { imageConstants } from './c-image.constants';
import ViewportUtil from 'utils/viewport';
import { FocusArea, ResizeBehavior } from 'components/atoms/c-image/c-image.models';
import BrowserCapabilities from 'utils/browser-capabilities';

describe('components', () => {
    describe('atoms', () => {
        describe('c-image', () => {
            let viewportUtil;
            const desiredWidth = 300;
            const desiredHeight = 200;
            const mount = build(CImage, { props: {
                url: '/media/images/starships/enterprise',
                alt: 'The Enterprise Starship',
                mimeType: '',
                quality: 65,
                radius: 0,
                imageFormat: 'png',
                resizeBehavior: 'fill',
                focusArea: 'center',
                backgroundColor: null,
            } });

            beforeEach(() => {
                viewportUtil = new ViewportUtil();
            });

            it('should not have an element defined', () => {
                spyOnProperty(BrowserCapabilities, 'isBrowser', 'get').and.returnValue(false);
                const vm = mount();
                expect(vm.$el).toBeDefined();
                expect(vm.$el.src).toContain('/media/images/starships/enterprise');
                expect(vm.$el.srcset).toContain(imageConstants.tinyGif);
                vm.$destroy();
            });

            it('should request a cropped image when a resize-behavior is specified', () => {
                const vm = mount({
                    props: {
                        resizeBehavior: ResizeBehavior.crop,
                        focusArea: FocusArea.bottomRight,
                    },
                });
                const requestUrl = vm.getParams({ width: desiredWidth, height: desiredHeight });
                expect(requestUrl).toContain(`w=${desiredWidth}`);
                expect(requestUrl).toContain(`h=${desiredHeight}`);
                expect(requestUrl).toContain(`fit=${ResizeBehavior.crop}`);
                expect(requestUrl).toContain(`f=${FocusArea.bottomRight}`);
                vm.$destroy();
            });

            describe('image loading strategy', () => {
                const vm = mount();

                it('should load a thumbnail image when element is in view', async (done) => {
                    spyOnProperty(viewportUtil, 'scrollY', 'get').and.returnValue(0);
                    spyOn(vm.$el, 'getBoundingClientRect').and.returnValue({
                        top: 0,
                        width: desiredWidth,
                        height: desiredHeight,
                    });
                    vm.inView = true;
                    await vm.calculateDimensions();
                    await vm.$nextTick();
                    expect(vm.ready).toBeTruthy();
                    expect(vm.inView).toBeTruthy();
                    expect(vm.$el.getBoundingClientRect).toHaveBeenCalled();
                    expect(vm.width).toEqual(desiredWidth);
                    expect(vm.$el.srcset).toContain(`w=${imageConstants.initialSize}`);
                    done();
                });

                it('should display the full image when it is loaded', async (done) => {
                    spyOnProperty(viewportUtil, 'scrollY', 'get').and.returnValue(0);
                    vm.imageLoaded = true;
                    await vm.$nextTick();
                    expect(vm.$el.srcset).toContain(`w=${desiredWidth}`);
                    done();
                });

                it('should reset the loading state when the url has changed', async (done) => {
                    vm.reset();
                    expect(vm.ready).toBeFalsy();
                    await vm.$nextTick();
                    expect(vm.ready).toBeTruthy();
                    expect(vm.imageLoaded).toBeFalsy();
                    done();
                });
            });
        });
    });
});
