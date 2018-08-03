/* eslint-disable max-nested-callbacks */
import {build} from 'vuenit';
import MainNav from './main-nav';
import Defaults from 'constants/defaults';
import ViewportUtil from 'utils/viewport';

describe('components', () => {
    describe('molecules', () => {
        describe('main-nav', () => {
            const fixture = require('./main-nav.unit.spec.json'),
                mount = build(MainNav, fixture);

            it('should detect the mobile device type', () => {
                const viewportUtil = new ViewportUtil(),
                    vm = mount();

                spyOnProperty(viewportUtil, 'screenWidth', 'get').and.returnValue(Defaults.breakpoints.tablet);
                expect(Object.keys(vm.classList)).toContain('main-nav--small');

                vm.$destroy();
            });

            it('should detect the desktop device type', () => {
                const viewportUtil = new ViewportUtil(),
                    vm = mount();

                spyOnProperty(viewportUtil, 'screenWidth', 'get').and.returnValue(Defaults.breakpoints.desktop);
                expect(Object.keys(vm.classList)).toContain('main-nav--large');

                vm.$destroy();
            });

            it('should be able to focus on the next and previous navigation element', () => {
                const vm = mount();

                vm.$refs.navItem = [
                    {focus: jasmine.createSpy()},
                    {focus: jasmine.createSpy()}
                ];

                vm.focusNextMainNavItem(0);
                expect(vm.$refs.navItem[1].focus).toHaveBeenCalled();
                vm.focusPrevMainNavItem(1);
                expect(vm.$refs.navItem[0].focus).toHaveBeenCalled();
                vm.$destroy();
            });

            it('should emit events so parent can change focus', () => {
                const vm = mount();

                spyOn(vm, '$emit');
                vm.$refs.navItem = [];

                vm.focusNextMainNavItem(0);
                expect(vm.$emit).toHaveBeenCalledWith('focusPrev');

                vm.focusPrevMainNavItem(0);
                expect(vm.$emit).toHaveBeenCalledWith('focusNext');

                vm.$destroy();
            });
        });
    });
});
