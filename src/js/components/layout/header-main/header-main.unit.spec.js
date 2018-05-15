/* eslint-disable max-nested-callbacks */
import HeaderMain from './header-main';
import PublicEventService from 'services/public-event-service';
import {build} from 'vuenit';

describe('components', () => {
    describe('layout', () => {
        describe('header-main', () => {
            const mount = build(HeaderMain, {});

            it('should render a header-main element', () => {
                const vm = mount();

                expect(vm.$el.querySelectorAll('.home-link').length).toEqual(1);
                expect(vm.$el.querySelectorAll('nav.main-nav').length).toEqual(1);
                expect(vm.$el.querySelectorAll('nav.sys-nav').length).toEqual(1);
                expect(vm.$el.querySelectorAll('search-bar').length).toEqual(0);

                vm.$destroy();
            });

            it('should only open search after a call', () => {
                const vm = new HeaderMain().$mount();

                expect(vm.searchOpen).toBeFalsy();
                expect(vm.assistState).toBeFalsy();

                vm.openSearch();
                expect(vm.searchOpen).toBeTruthy();
                expect(vm.assistState).toBeTruthy();
            });

            it('should only close search after a call', () => {
                const vm = new HeaderMain().$mount();

                vm.closeSearch();
                expect(vm.searchOpen).toBeFalsy();
                expect(vm.assistState).toBeFalsy();

                vm.$destroy();
            });

            it('should toggle the mainnav status', () => {
                const vm = new HeaderMain().$mount();

                expect(vm.mainNavOpen).toBeFalsy();
                expect(vm.assistState).toBeFalsy();

                vm.navAssistToggle();
                expect(vm.mainNavOpen).toBeTruthy();
                expect(vm.assistState).toBeTruthy();

                vm.navAssistToggle();
                expect(vm.mainNavOpen).toBeFalsy();
                expect(vm.assistState).toBeFalsy();

                vm.$destroy();
            });

            it('should update the size offset when a drawer resizes', () => {
                const vm = new HeaderMain().$mount();

                PublicEventService.emit('size', {element: 'drawer', size: 100});
                expect(vm.offsetTopHeader).toEqual(100);
                PublicEventService.emit('size', {element: 'other-element', size: 10});
                expect(vm.offsetTopHeader).toEqual(100);

                vm.$destroy();
            });
        });
    });
});
