/* eslint-disable max-nested-callbacks */
import FooterMain from './footer-content';
import {build} from 'vuenit';
import Defaults from 'constants/defaults';

describe('components', () => {
    describe('layout', () => {
        describe('footer-content', () => {
            const data = require('./footer-content.unit.spec.json'),
                fixture = require('./footer-content.unit.fixture'),
                buildOptions = {props: {...data.properties}},
                mount = build(FooterMain, {buildOptions});

            it('should render a footer-content element', () => {
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

            it('should $emit the selected country', async(done) => {
                const vm = mount(fixture.countrySettings);

                spyOn(vm, '$emit').and.callThrough();
                vm.countryInput = Defaults.country;
                vm.setCountry();
                expect(vm.$emit).toHaveBeenCalledWith('country-changed', {country: Defaults.country});
                done();
            });
        });
    });
});
