/* eslint-disable max-nested-callbacks */
// import Vue from 'vue';
import ResponsivePicture from './responsive-picture';

describe('components', () => {
    describe('media', () => {
        describe('responsive-picture', () => {
            it('should render a picture element with metadata', () => {
                const vm = new ResponsivePicture({
                        propsData: {
                            desktopWidth: {url: '/link/to/an/image.png', retinaUrl: '/link/to/an/retinaImage.png'},
                            mobileWidth: '/link/to/an/image.png',
                            description: 'Alt text',
                            lazy: false
                        }
                    }).$mount(),
                    sources = vm.$el.querySelectorAll('source'),
                    img = vm.$el.querySelector('img');

                expect(/image\.png$/.test(img.src)).toBeTruthy();
                expect(sources.length).toEqual(2);
                expect(img.alt).toEqual('Alt text');
                vm.$destroy();
            });

            it('should render a picture element but not load images until scrolled into view', () => {
                const responsivePicture = new ResponsivePicture({
                    propsData: {
                        desktopWidth: {url: '/link/to/an/image.png', retinaUrl: '/link/to/an/retinaImage.png'},
                        mobileWidth: '/link/to/an/image.png',
                        description: 'Alt text',
                        lazy: true
                    }
                });

                spyOnProperty(responsivePicture.viewportUtil, 'scrollY', 'get').and.returnValue(0);
                spyOnProperty(responsivePicture.viewportUtil, 'screenHeight', 'get').and.returnValue(500);

                const vm = responsivePicture.$mount(),
                    sources = vm.$el.querySelectorAll('source'),
                    img = vm.$el.querySelector('img');

                vm.ready = true;
                expect(/image\.png$/.test(img.src)).toBeFalsy();
                expect(sources.length).toEqual(2);
                expect(img.alt).toEqual('Alt text');

                vm.$el.querySelector('img').dispatchEvent(new window.Event('load'));
                vm.$destroy();
            });
        });
    });
});
