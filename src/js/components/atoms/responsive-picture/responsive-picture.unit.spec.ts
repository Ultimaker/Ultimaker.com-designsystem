import Vue from 'vue';
import ResponsivePicture from './responsive-picture';
import ResponsivePictureSource from './responsive-picture-source';
import { build } from 'vuenit';
import ViewportUtil from 'utils/viewport';

describe('components', () => {
    describe('atoms', () => {
        describe('responsive-picture', () => {
            beforeEach(() => {
                Vue.component('responsive-picture-source', ResponsivePictureSource);
            });

            const mount = build(ResponsivePicture, {});

            it('should render a picture element with metadata', () => {
                const vm = mount({
                    props: {
                        desktopWidth: { url: '/link/to/an/image.png', retinaUrl: '/link/to/an/retinaImage.png' },
                        mobileWidth: '/link/to/an/image.png',
                        description: 'Alt text',
                        lazy: false,
                    },
                });
                const sources = vm.$el.querySelectorAll('source');
                const img = vm.$el.querySelector('img');

                expect(/image\.png$/.test(img.src)).toBeTruthy();
                expect(sources.length).toEqual(2);
                expect(img.alt).toEqual('Alt text');
                vm.$destroy();
            });

            it('should render a picture element but not load images until scrolled into view', () => {
                const viewportUtil = new ViewportUtil();
                const vm = mount({
                    props: {
                        desktopWidth: { url: '/link/to/an/image-lazy.png', retinaUrl: '/link/to/an/retinaImage-lazy.png' },
                        mobileWidth: '/link/to/an/image-lazy.png',
                        description: 'Alt text lazy',
                        lazy: true,
                    },
                });

                debugger;

                spyOnProperty(viewportUtil, 'scrollY', 'get').and.returnValue(0);
                spyOnProperty(viewportUtil, 'screenHeight', 'get').and.returnValue(500);
                spyOn(vm.$el, 'getBoundingClientRect').and.returnValue({ top: 600, height: 200 });

                const sources = vm.$el.querySelectorAll('source');
                const img = vm.$el.querySelector('img');

                vm.ready = true;
                expect(/image-lazy\.png$/.test(img.src)).toBeFalsy();
                expect(sources.length).toEqual(2);
                expect(img.alt).toEqual('Alt text lazy');

                // @ts-ignore
                vm.$el.querySelector('img').dispatchEvent(new window.Event('load'));
                vm.$destroy();
            });
        });
    });
});
