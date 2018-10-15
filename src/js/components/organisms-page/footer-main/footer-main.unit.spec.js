/* eslint-disable max-nested-callbacks */
import FooterMain from './footer-main';
import {build} from 'vuenit';
import Defaults from 'constants/defaults';

describe('components', () => {
    describe('layout', () => {
        describe('footer-main', () => {
            const data = require('./footer-main.unit.spec.json'),
                fixture = require('./footer-main.unit.fixture'),
                buildOptions = {props: {...data.properties}},
                mount = build(FooterMain, {buildOptions});

            it('should render a footer-main element', () => {
                const vm = mount(buildOptions),
                    objAttributes = vm.$el.attributes;

                expect(vm.$el).toBeDefined();
                expect(objAttributes['class'].value).toContain('footer');
                vm.$destroy();
            });

            it('should display the current selected country', () => {
                const vm = mount(buildOptions);

                expect(vm.currentCountryLabel).toEqual('Netherlands - €');
                expect(vm.currentCountryAriaLabel).toEqual('Change your country, currently: Netherlands');
                vm.$destroy();
            });

            it('should render component with properties', () => {
                const vm = mount(buildOptions);

                expect(vm.$el.querySelectorAll('.footer-nav__column').length).toBeGreaterThanOrEqual(1);
                expect(Object.keys(data.properties).length).toEqual(Object.keys(vm._props).length);
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

            it('should dispatch PUSH_SETTINGS to store the selected country', async(done) => {
                const vm = mount(fixture.countrySettings);

                spyOn(vm.$store, 'dispatch').and.callThrough();
                vm.setCountry(Defaults.country);
                expect(vm.$store.dispatch).toHaveBeenCalled();
                done();
            });
        });
    });
});
