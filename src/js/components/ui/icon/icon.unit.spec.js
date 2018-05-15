/* eslint-disable max-nested-callbacks */
import Icon from './icon';

describe('components', () => {
    describe('ui', () => {
        describe('icon', () => {
            it('should render an icon', () => {
                const vm = new Icon({
                        propsData: {
                            iconName: 'search'
                        }
                    }).$mount(),
                    svgUse = vm.$el.querySelector('use');

                expect(svgUse.getAttribute('xlink:href')).toContain('iconset.svg#icon-search');
                expect(vm.iconId).toEqual('icon-search');
                expect(vm.iconClass).toEqual('icon--search');
                vm.$destroy();
            });

            describe('customized icon', () => {
                const iconUrl = '/custom/iconset.svg';

                beforeEach(() => {
                    window.svgIconMap = iconUrl;
                });

                it('should render with a customized iconset', () => {
                    const vm = new Icon({
                            propsData: {
                                iconName: 'search'
                            }
                        }).$mount(),
                        svgUse = vm.$el.querySelector('use');

                    expect(vm.iconUrl).toEqual(iconUrl);
                    expect(svgUse.getAttribute('xlink:href')).toContain(iconUrl);
                    vm.$destroy();
                });
            });
        });
    });
});
