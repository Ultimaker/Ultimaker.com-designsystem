/* eslint-disable max-nested-callbacks */
import Flyout from './flyout';
import {build} from 'vuenit';

describe('components', () => {
    describe('ui', () => {
        describe('flyout', () => {
            const mount = build(Flyout, {});

            it('should render a "flyout"', () => {
                const vm = mount({});

                expect(vm.$el).toBeDefined();
                vm.$destroy();
            });

            it('should emit an open event', () => {
                const vm = mount({});

                spyOn(vm, '$emit');
                vm.open({});

                expect(vm.$emit).toHaveBeenCalledTimes(1);
                expect(vm.$emit).toHaveBeenCalledWith('open');
                vm.$destroy();
            });

            it('should emit a close event', () => {
                const vm = mount({});

                spyOn(vm, '$emit');
                vm.close({});

                expect(vm.$emit).toHaveBeenCalledTimes(1);
                expect(vm.$emit).toHaveBeenCalledWith('close');
                expect(vm.linkIndex).toBe(0);
                expect(vm.sectionIndex).toBe(0);
                expect(vm.calc).toBe(0);
                vm.$destroy();
            });
        });
    });
});
