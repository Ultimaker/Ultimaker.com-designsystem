/* eslint-disable max-nested-callbacks */
import {build} from 'vuenit';
import MainNavItem from './main-nav-item';

fdescribe('components', () => {
    describe('molecules', () => {
        describe('main-nav-item', () => {
            const fixture = require('./main-nav-item.unit.spec.json'),
                mount = build(MainNavItem, fixture);

            it('should be in a closed state by default', () => {
                const vm = mount();

                expect(vm.flyoutIsOpen).toEqual(false);
                vm.$destroy();
            });

            it('should change its icon direction according to the openState', () => {
                const vm = mount();

                expect(vm.angleDirection).toEqual('angle-down');
                vm.flyoutIsOpen = true;
                expect(vm.angleDirection).toEqual('angle-up');
                vm.$destroy();
            });

            it('should be able to toggle the openState', async(done) => {
                const vm = mount();

                await vm.showFlyout();
                expect(vm.flyoutIsOpen).toEqual(true);

                vm.hideFlyout();
                expect(vm.flyoutIsOpen).toEqual(false);

                vm.toggleFlyout();
                expect(vm.flyoutIsOpen).toEqual(true);

                const delayPromise = vm.delayHideFlyout();

                expect(vm.hideTimeout).not.toEqual(null);
                expect(vm.flyoutIsOpen).toEqual(true);

                await delayPromise;
                expect(vm.hideTimeout).toEqual(null);
                expect(vm.flyoutIsOpen).toEqual(false);

                vm.$destroy();
                done();
            });

            it('should not close the flyout when reopened within a short period of time', async(done) => {
                const vm = mount();

                await vm.showFlyout();
                vm.delayHideFlyout();
                expect(vm.flyoutIsOpen).toEqual(true);
                await vm.showFlyout();
                expect(vm.flyoutIsOpen).toEqual(true);
                vm.$destroy();
                done();
            });

            it('should focus on the first flyout link when opened', async(done) => {
                const vm = mount();

                spyOn(vm.$el, 'querySelector').and.returnValue({focus: () => {
                    expect(vm.flyoutIsOpen).toEqual(true);
                    vm.$destroy();
                    done();
                }});
                vm.selectFirstFlyoutItem();
            });

            it('should emit a tab events when next or previous should be selected', () => {
                const vm = mount();

                spyOn(vm, '$emit');

                vm.selectNextNavItem();
                expect(vm.$emit).toHaveBeenCalledWith('tab');

                vm.selectPrevNavItem();
                expect(vm.$emit).toHaveBeenCalledWith('shifttab');

                vm.$destroy();
            });

            it('should be able to focus on parent element', () => {
                const vm = mount();

                vm.flyoutIsOpen = true;
                vm.$refs.parent = {
                    $el: jasmine.createSpyObj('parent', {
                        focus: jasmine.createSpy()
                    })
                };
                vm.selectParent();
                expect(vm.$refs.parent.$el.focus).toHaveBeenCalled();
                expect(vm.flyoutIsOpen).toEqual(false);
            });
        });
    });
});
