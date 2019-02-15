import LocaleSelector from './locale-selector';
import {build} from 'vuenit';
import Defaults from 'constants/defaults';

describe('components', () => {
    describe('molecules', () => {
        describe('locale-selector', () => {
            const mount = build(LocaleSelector, {});
            const buildOptions = require('./locale-selector.unit.spec.json');

            it('should render a locale-selector component', () => {
                const vm = mount();

                expect(vm.$el).toBeDefined();
                vm.$destroy();
            });

            it('should display the current selected country', () => {
                const vm = mount(buildOptions);

                expect(vm.currentCountryLabel).toEqual('Netherlands - €');
                expect(vm.currentCountryAriaLabel).toEqual('Change your country, currently: Netherlands');
                vm.$destroy();
            });


            it('should display the countrySelector after toggle', () => {
                const vm = mount(buildOptions);

                vm.toggleCountrySelector();
                expect(vm.countrySelectorOpen).toBeTruthy();
                vm.toggleCountrySelector();
                expect(vm.countrySelectorOpen).toBeFalsy();
                vm.$destroy();
            });

            it('should $emit the selected country', async(done) => {
                const vm = mount(buildOptions);

                spyOn(vm, '$emit').and.callThrough();
                vm.countryInput = Defaults.country;
                vm.setCountry();
                expect(vm.$emit).toHaveBeenCalledWith('country-changed', {country: Defaults.country});
                vm.$destroy();
                done();
            });
        });
    });
});
