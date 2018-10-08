/* eslint-disable max-nested-callbacks */
import FooterMain from './footer-main';
import {build} from 'vuenit';

describe('components', () => {
    describe('layout', () => {
        describe('footer', () => {
            const fixture = require('./footer-main.unit.fixture'),
                mount = build(FooterMain, {});

            it('should render a footer-main element', () => {
                const vm = mount(fixture.noCountrySettings);

                expect(vm.$el.querySelectorAll('.footer__container').length).toEqual(1);
                expect(vm.currentCountryLabel).toEqual('United States of America - $');
                expect(vm.currentCountryAriaLabel).toEqual('Change your country, currently: United States of America');
                vm.$destroy();
            });

            it('should display the current selected country', () => {
                const vm = mount(fixture.countrySettings);

                expect(vm.currentCountryLabel).toEqual('Netherlands - €');
                expect(vm.currentCountryAriaLabel).toEqual('Change your country, currently: Netherlands');
                vm.$destroy();
            });

            it('should display the countrySelector after toggle', () => {
                const vm = mount(fixture.countrySettings);

                vm.toggleCountrySelector();
                expect(vm.countrySelectorOpen).toBeTruthy();
                vm.toggleCountrySelector();
                expect(vm.countrySelectorOpen).toBeFalsy();
                vm.$destroy();
            });

            it('should dispatch PUSH_SETTINGS to store the selected country', () => {
                const vm = mount(fixture.countrySettings);

                spyOn(vm.$store, 'dispatch').and.returnValue(true);
                vm.setCountry({});
                expect(vm.$store.dispatch).toHaveBeenCalled();
            });
        });
    });
});
