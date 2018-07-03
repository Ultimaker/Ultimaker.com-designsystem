/* eslint-disable max-nested-callbacks */
import Icon from './icon';
import {build} from 'vuenit';

describe('components', () => {
    describe('atoms', () => {
        describe('icon', () => {
            const mount = build(Icon);

            it('should render an icon', () => {
                const vm = mount({
                        props: {
                            iconName: 'search'
                        }
                    }),
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
                    const vm = mount({
                            props: {
                                iconName: 'search'
                            }
                        }),
                        svgUse = vm.$el.querySelector('use');

                    expect(vm.iconUrl).toEqual(iconUrl);
                    expect(svgUse.getAttribute('xlink:href')).toContain(iconUrl);
                    vm.$destroy();
                });
            });
        });
    });
});