/* eslint-disable max-nested-callbacks */
import NavAssist from './nav-assist';
import {build} from 'vuenit';

describe('components', () => {
    describe('atoms', () => {
        describe('nav-assist', () => {
            const mount = build(NavAssist);

            it('should render a navigation assistance button', () => {
                const vm = mount(),
                    svg = vm.$el.querySelectorAll('svg');

                expect(svg.length).toEqual(1);

                vm.$destroy();
            });

            it('should change button state on click', () => {
                const vm = mount({
                    props: {
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
                const vm = mount({
                    props: {
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
                const vm = mount({
                    props: {
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
