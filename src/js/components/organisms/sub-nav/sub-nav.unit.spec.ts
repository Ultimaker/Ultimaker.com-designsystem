/* eslint-disable max-nested-callbacks */
import SubNav from './sub-nav';
import { build } from 'vuenit';
import ViewportUtil from 'utils/viewport';

describe('components', () => {
    describe('organisms', () => {
        describe('nav-assist', () => {
            const mount = build(SubNav, {});

            const page = {
                links: {
                    siblings: [
                        {
                            href: "/api/pages/materials/ultimaker-pla",
                            title: "PLA",
                            icon: {
                                thumbsquare_mobile: "/generator/svg/60/60",
                                thumbsquare_desktop: "/generator/svg/120/120"
                            }
                        }
                    ]
                }
            };

            it('should render a subnavigation', async () => {
                const vm = mount({props: {page: page}});

                await vm.$nextTick();

                expect(vm.$el).toBeDefined();
                expect(vm.collapsed).toBeFalsy();
                vm.$destroy();
            });

            it('should have a method mapLink which cl class when scrolled upwards', () => {
                const vm = mount({props: {page: page}});

                expect(vm.mapLink).toEqual(jasmine.any(Function));
                expect(vm.mapLink('/api/pages/somepage')).toEqual('/somepage');
                vm.$destroy();
            });
        });
    });
});
