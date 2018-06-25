/* eslint-disable max-nested-callbacks */
import {build} from 'vuenit';
import CmsImage from './cms-image';

describe('components', () => {
    describe('organisms', () => {
        describe('cms-image', () => {
            const fixture = require('./cms-image.unit.spec.json'),
                mount = build(CmsImage);


            it('should parse an cms image to a responsive picture', () => {
                const vm = mount({
                    props: {
                        image: fixture.image,
                        orientation: 'square'
                    }
                });

                expect(vm.$el).toBeDefined();
                expect(vm.desktopImage.url).toEqual('http://desktop/image');
                expect(vm.mobileImage.url).toEqual('http://mobile/image');
                vm.$destroy();
            });

            it('should not fail when an image isn\'t specified', () => {
                const vm = mount({
                    props: {
                        image: fixture.image,
                        orientation: 'portrait'
                    }
                });

                expect(vm.$el).toBeDefined();
                expect(vm.mobileImage.url).toEqual('http://mobile/image');
                expect(vm.desktopImage).toEqual('');
                vm.$destroy();
            });

            it('should have fixed aspect ratio\'s', () => {
                const vm = mount({
                    props: {
                        image: fixture.image,
                        orientation: 'portrait'
                    }
                });

                expect(vm.styles['padding-top']).toEqual('165%');
                vm.orientation = 'landscape';
                expect(vm.styles['padding-top']).toEqual('60%');
                vm.orientation = 'square';
                expect(vm.styles['padding-top']).toEqual('100%');
                vm.orientation = 'landscapefull';
                expect(vm.styles['padding-top']).toEqual('35%');
                vm.orientation = 'blablabla';
                expect(vm.styles).toEqual({});
                vm.$destroy();
            });
        });
    });
});
