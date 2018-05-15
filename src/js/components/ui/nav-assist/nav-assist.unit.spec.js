/* eslint-disable max-nested-callbacks */
import NavAssist from './nav-assist';

describe('components', () => {
    describe('ui', () => {
        describe('nav-assist', () => {
            it('should render a navigation assistance button', () => {
                const vm = new NavAssist().$mount(),
                    svg = vm.$el.querySelectorAll('svg');

                expect(svg.length).toEqual(1);

                vm.$destroy();
            });

            it('should change button state on click', () => {
                const vm = new NavAssist({
                    propsData: {
                        openState: false
                    }
                }).$mount();

                vm.$on('toggle', () => { vm.openState = true; });

                expect(vm.used).toBeFalsy();
                vm.toggleState();
                expect(vm.used).toBeTruthy();
                expect(vm.openState).toBeTruthy();

                vm.$destroy();
            });

            it('should change used value when openState is modified', (done) => {
                const vm = new NavAssist({
                    propsData: {
                        openState: false
                    }
                }).$mount();

                expect(vm.used).toBeFalsy();
                vm.openState = true;

                vm.$nextTick(() => {
                    expect(vm.used).toBeTruthy();

                    vm.$destroy();
                    done();
                });
            });

            it('should emit a toggle event on close', () => {
                const vm = new NavAssist({
                    propsData: {
                        openState: false
                    }
                }).$mount();

                spyOn(vm, '$emit');

                vm.close();
                expect(vm.$emit).not.toHaveBeenCalled();

                vm.openState = true;
                vm.close();
                expect(vm.$emit).toHaveBeenCalledWith('toggle');

                vm.$destroy();
            });
        });
    });
});
