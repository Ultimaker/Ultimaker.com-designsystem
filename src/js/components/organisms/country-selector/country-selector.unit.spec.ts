/* eslint-disable max-nested-callbacks */
import 'babel-polyfill';
import Vue from 'vue';
import CountrySelector from './country-selector';
import { build } from 'vuenit';

const countriesContent = require('./country-selector.unit.spec.json');

describe('components', () => {
    describe('organisms', () => {
        describe('country-selector', () => {
            const mount = build(CountrySelector, {
                props: {
                    delay: 0,
                    enableCountry: true,
                    datasource: countriesContent.datasource,
                },
            });

            it('should render a country-selector element', () => {
                const vm = mount();

                expect(vm.$el.querySelector('auto-complete')).toBeDefined();
                expect(vm.$el.querySelector('icon-button')).toBeDefined();

                vm.$destroy();
            });

            it('should focus on elements to assist keyboard usage', async (done) => {
                const vm = mount();
                vm.$refs.autocomplete = jasmine.createSpyObj('autocomplete', {
                    focus: jasmine.createSpy(),
                    calculateDirection: jasmine.createSpy(),
                });
                vm.$refs.closeCountryPanel = jasmine.createSpyObj('closeCountryPanel', {
                    focus: jasmine.createSpy(),
                });
                await vm.$nextTick();
                vm.focusClose();
                await vm.focus();

                expect(vm.$refs.autocomplete.focus).toHaveBeenCalled();
                expect(vm.$refs.closeCountryPanel.focus).toHaveBeenCalled();
                vm.$destroy();
                done();
            });

            it('should change countries when auto-complete changes', async (done) => {
                const vm = mount();
                const newCountry = { value: 'NL', title: 'Netherlands' };

                await vm.countryChanged(newCountry);

                expect(vm.selectedCountry.value).toEqual(newCountry.value);
                vm.$destroy();
                done();
            });
        });
    });
});
