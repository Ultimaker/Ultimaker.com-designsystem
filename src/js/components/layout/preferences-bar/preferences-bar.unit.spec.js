/* eslint-disable max-nested-callbacks */
import Vue from 'vue';
import {build} from 'vuenit';
import PreferencesBar from './preferences-bar';
import DataService from 'services/data-service';
import halParser from 'utils/hal-parser';

describe('components', () => {
    describe('ui', () => {
        describe('preferences-bar', () => {
            const preferenceBarContent = require('@root/server/mock/data/globals/preferences-bar.json'),
                countriesContent = halParser(require('@root/server/mock/data/globals/countries.json'));

            const mount = build(PreferencesBar, {
                props: {
                    delay: 0
                }
            });

            beforeEach(() => {
                const preferencesBarPromise = new Promise((resolve, reject) => {
                    resolve(Object.assign({}, preferenceBarContent));
                });

                spyOn(DataService, 'getData').and.callFake((service) => {
                    if (service === 'preferences-bar') { return preferencesBarPromise; }

                    return {};
                });
            });

            it('should initialize and set defaults', (done) => {
                const vm = mount({
                    props: {
                        delay: 0,
                        enableCountry: true
                    },
                    store: {
                        getters: {
                            $settings: () => ({
                                consentLevel: '1111',
                                consentLevelSet: false
                            })
                        }
                    }
                });

                vm.show().then(() => {
                    expect(vm.visible).toBeTruthy();

                    vm.init().then(() => {
                        expect(DataService.getData).toHaveBeenCalled();
                        vm.$destroy();
                        done();
                    });
                });
            });
            it('should visible when consentLevel is not set and be hidden when saved', (done) => {
                const vm = mount({
                    store: {
                        getters: {
                            $settings: () => ({
                                consentLevel: 0b11,
                                consentLevelSet: false
                            })
                        }
                    }
                });

                setTimeout(() => {
                    expect(vm.visible).toBeTruthy();
                    expect(vm.classList['preferences-bar--visible']).toEqual(vm.visible);
                    vm.validateAndSubmit();
                    expect(vm.visible).toBeFalsy();
                    vm.$destroy();
                    done();
                }, 5);
            });

            it('should be hidden when consentLevel has been set', () => {
                const vm = mount({
                    store: {
                        getters: {
                            $settings: () => ({
                                blaa: true,
                                consentLevel: 0b11,
                                consentLevelSet: true
                            })
                        }
                    }
                });

                expect(vm.visible).toBeFalsy();
                vm.$destroy();
            });

            it('should be able to calculate consentLevels', () => {
                const vm = mount({
                    store: {
                        getters: {
                            $settings: () => ({
                                consentLevel: 0b1111,
                                consentLevelSet: true
                            })
                        }
                    }
                });

                const allTrue = vm.functional && vm.analytics && vm.personalization && vm.tracking;

                expect(allTrue).toBeTruthy();
                expect(vm.bitmask).toEqual(0b1111);

                vm.personalization = false;
                vm.tracking = false;
                expect(vm.bitmask).toEqual(0b11);

                vm.personalization = false;
                vm.tracking = true;
                expect(vm.bitmask).toEqual(0b1011);

                vm.$destroy();
            });

            it('should retrieve and display translated labels', (done) => {
                const vm = mount({
                    store: {
                        getters: {
                            $settings: () => ({
                                consentLevel: null,
                                consentLevelSet: false
                            })
                        }
                    }
                });

                Vue.nextTick(() => {
                    vm.personalization = true;
                    vm.tracking = true;
                    expect(vm.experienceLabel).toEqual(preferenceBarContent.attributes.fullExperienceLabel);

                    vm.personalization = false;
                    vm.tracking = true;
                    expect(vm.experienceLabel).toEqual(preferenceBarContent.attributes.customExperienceLabel);

                    vm.$destroy();
                    done();
                });
            });

            it('should store the preferences to the persistent settings', () => {
                let consentLevelUpdated = false,
                    constentLevelSetUpdated = false,
                    country = null;

                const vm = mount({
                    props: {
                        enableCountry: true
                    },
                    store: {
                        getters: {
                            $settings: () => ({
                                consentLevel: '1111',
                                consentLevelSet: false,
                                country: {
                                    'name': 'Germany',
                                    'code': 'DE',
                                    'currency': {
                                        'code': 'EUR',
                                        'symbol': '\u20ac'
                                    }
                                }
                            }),
                            countries: () => countriesContent,
                            detectedCountry: () => ({
                                'name': 'Netherlands',
                                'code': 'NL',
                                'currency': {
                                    'code': 'EUR',
                                    'symbol': '\u20ac'
                                }
                            })
                        },
                        actions: {
                            PUSH_SETTING: (state, {key, value}) => {
                                switch (key) {
                                    case 'consentLevel':
                                        consentLevelUpdated = true;
                                        break;
                                    case 'consentLevelSet':
                                        constentLevelSetUpdated = true;
                                        break;
                                    case 'country':
                                        country = value;
                                }
                            }
                        }
                    }
                });

                expect(vm.country.code).toEqual('DE');
                vm.validateAndSubmit();
                expect(country.code).toEqual(vm.country.code);
                expect(consentLevelUpdated && constentLevelSetUpdated).toBeTruthy();
                vm.$destroy();
            });

            it('should be able to notify other components when the size changes', (done) => {
                const vm = mount({
                    store: {
                        props: {
                            enableCountry: false
                        },
                        getters: {
                            $settings: () => ({
                                consentLevel: '1111',
                                consentLevelSet: true
                            })
                        }
                    }
                });
                let emitted = false;

                spyOn(vm.$parent, '$emit').and.callFake(() => {
                    emitted = true;
                });
                vm.emitSize();
                Vue.nextTick(() => {
                    expect(emitted).toBeTruthy();
                    done();
                });
            });

            it('should focus on the correct element when the edit country panel is toggled', (done) => {
                const vm = mount({});

                vm.$refs.editCountry = jasmine.createSpyObj('editCountry', {
                    focus: jasmine.createSpy()
                });
                vm.$refs.countrySelector = jasmine.createSpyObj('countrySelector', {
                    focus: jasmine.createSpy()
                });

                vm.editCountry();
                expect(vm.countryPanelOpen).toBeTruthy();

                vm.closeEditCountry();

                Vue.nextTick(() => {
                    expect(vm.countryPanelOpen).toBeFalsy();
                    expect(vm.$refs.editCountry.focus).toHaveBeenCalled();
                    expect(vm.$refs.countrySelector.focus).toHaveBeenCalled();
                    vm.$destroy();
                    done();
                });
            });
        });
    });
});
