import 'babel-polyfill';
import { build } from 'vuenit';

import { data } from './data/table-compare.data';

import { TableCompare } from './table-compare';

describe('components', () => {
    describe('organisms', () => {
        describe('table-compare', () => {
            const mount = build(TableCompare, { props: {} });

            it('should render an TableCompare component', () => {
                const vm = mount();
                expect(vm.$el).toBeDefined();
                vm.$destroy();
            });

            it('should be able to scroll to the next column', () => {
                const vm = mount({ props: data.default });
                expect(vm.$refs.scrollContainer).toBeDefined();
                spyOnProperty(vm.$refs.scrollWidthContainer, 'clientWidth', 'get').and.returnValue(300);
                spyOn(vm.$refs.scrollContainer, 'scrollTo');
                vm.scroll();
                expect(vm.$refs.scrollContainer.scrollTo).toHaveBeenCalledWith({ left: 300, behavior: 'smooth' });

                spyOnProperty(vm.$refs.scrollContainer, 'scrollLeft', 'get').and.returnValue(300);
                vm.scroll(true);
                expect(vm.$refs.scrollContainer.scrollTo).toHaveBeenCalledWith({ left: 0, behavior: 'smooth' });
                vm.$destroy();
            });

            it('should disable the scroll buttons when they intersect', async () => {
                const vm = mount({ props: data.default });

                vm.intersectionObserver([{
                    isIntersecting: true,
                    target: vm.$refs.columns[0],
                }]);
                expect(vm.disableLeft).toBeTruthy();
                expect(vm.disableRight).toBeFalsy();

                vm.intersectionObserver([{
                    isIntersecting: true,
                    target: vm.$refs.columns[1],
                }]);
                expect(vm.disableLeft).toBeFalsy();
                expect(vm.disableRight).toBeFalsy();

                vm.intersectionObserver([{
                    isIntersecting: true,
                    target: vm.$refs.columns.slice(-1)[0],
                }]);
                expect(vm.disableLeft).toBeFalsy();
                expect(vm.disableRight).toBeTruthy();

                vm.$destroy();
            });

            it('should reset its scroll position when resized', () => {
                const vm = mount({ props: data.default });
                expect(vm.$refs.scrollContainer).toBeDefined();
                vm.$refs.scrollContainer.scrollLeft = 200;
                vm.resetScrollPosition();
                expect(vm.$refs.scrollContainer.scrollLeft).toEqual(0);
                vm.$destroy();
            });
        });

        Object.keys(data).forEach((key) => {
            describe(`table-compare ${key} props`, () => {
                const props = data[key];
                const mount = build(TableCompare, { props });

                it(`should render an TableCompare component with ${key} props`, () => {
                    const vm = mount();
                    expect(vm.$el).toBeDefined();
                    vm.$destroy();
                });
            });
        });
    });
});
