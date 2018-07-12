/* eslint-disable max-nested-callbacks */
import 'babel-polyfill';
import Vue from 'vue';
import CountrySelector from './country-selector';
import {build} from 'vuenit';


const countriesContent = require('./country-selector.unit.spec.json');

describe('components', () => {
    describe('organisms', () => {
        describe('country-selector', () => {
            let countriesFetched = 0,
                countryFetched = 0;

            const mount = build(CountrySelector, {
                props: {
                    delay: 0,
                    enableCountry: true
                },
                store: {
                    actions: {
                        FETCH_COUNTRIES: () => {
                            countriesFetched++;
                        },
                        FETCH_COUNTRY: () => {
                            countryFetched++;
                        }
                    },
                    getters: {
                        countries: () => countriesContent,
                        detectedCountry: () => ({code: 'NL'})
                    }
                }
            });

            it('should render a country-selector element', (done) => {
                const vm = mount();

                vm.initPromise
                    .then(() => {
                        expect(countriesFetched).toEqual(1);
                        expect(countryFetched).toEqual(1);
                        expect(vm.$el.querySelector('auto-complete')).toBeDefined();
                        expect(vm.$el.querySelector('icon-button')).toBeDefined();

                        vm.$destroy();
                        done();
                    })
                    .catch((ex) => {
                        vm.$destroy();
                        fail(`Exception has occured: ${ ex.message }`);
                    });
            });

            it('should focus on elements to assist keyboard usage', (done) => {
                const vm = mount();

                vm.initialized = true;

                Vue.nextTick()
                    .then(() => {
                        vm.$refs.autocomplete = jasmine.createSpyObj('autocomplete', {
                            focus: jasmine.createSpy()
                        });
                        vm.$refs.closeCountryPanel = jasmine.createSpyObj('closeCountryPanel', {
                            focus: jasmine.createSpy()
                        });

                        vm.focusClose();

                        return vm.focus();
                    })
                    .then(() => {
                        expect(vm.$refs.autocomplete.focus).toHaveBeenCalled();
                        expect(vm.$refs.closeCountryPanel.focus).toHaveBeenCalled();
                        vm.$destroy();
                        done();
                    })
                    .catch((ex) => {
                        vm.$destroy();
                        fail(`Exception has occured: ${ ex.message }`);
                    });
            });

            it('should change countries when auto-complete changes', (done) => {
                const vm = mount(),
                    newCountry = countriesContent.country[1];

                vm.initPromise
                    .then(() => {
                        return vm.countryChanged(newCountry);
                    })
                    .then(() => {
                        expect(vm.selectedCountry.code).toEqual(newCountry.code);
                        vm.$destroy();
                        done();
                    })
                    .catch((ex) => {
                        vm.$destroy();
                        fail(`Exception has occured: ${ ex.message }`);
                    });
            });
        });
    });
});
