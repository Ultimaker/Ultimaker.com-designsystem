import Vue from 'vue';
import {mapGetters} from 'vuex';
import _find from 'lodash/find';
import DataService from 'services/data-service';
import Logger from 'utils/logger';
import PublicEventService from 'services/public-event-service';
import ConsentLevel from 'definitions/consent-level';
import Defaults from 'constants/defaults';
import ViewportUtil from 'utils/viewport';

export default Vue.component('preferences-bar', {
    name: 'preferences-bar',
    template: require('./preferences-bar.html'),
    props: {
        delay: {
            type: Number,
            default: 500
        },
        enableCountry: {
            type: Boolean,
            default: false
        }
    },
    data: () => ({
        visible: false,
        initialized: false,
        initializing: null,
        countryPanelOpen: false,
        cookiePanelOpen: false,
        country: null,
        content: {},
        consentLevel: null,
        viewport: new ViewportUtil()
    }),
    computed: {
        ...mapGetters(['$settings', 'countries', 'detectedCountry']),
        bitmask() {
            return this.consentLevel.level();
        },
        functional: {
            get() {
                return this.consentLevel.has(ConsentLevel.Levels.functional);
            }
        },
        analytics: {
            get() {
                return this.consentLevel.has(ConsentLevel.Levels.analytics);
            }
        },
        personalization: {
            get() {
                return this.consentLevel.has(ConsentLevel.Levels.personalization);
            },
            set(val) {
                this.consentLevel[(val ? 'set' : 'unset')](ConsentLevel.Levels.personalization);
            }
        },
        tracking: {
            get() {
                return this.consentLevel.has(ConsentLevel.Levels.tracking);
            },
            set(val) {
                this.consentLevel[(val ? 'set' : 'unset')](ConsentLevel.Levels.tracking);
            }
        },
        experienceLabel() {
            return this.consentLevel.bitmask === ConsentLevel.Levels.all ?
                this.content.attributes.fullExperienceLabel :
                this.content.attributes.customExperienceLabel;
        },
        classList() {
            return {
                'preferences-bar--visible': this.visible
            };
        },
        detectedCountries() {
            const detectedCountries = [];

            try {
                const detectedCountryByIp = _find(this.countries.country, {'code': this.detectedCountry});

                if (detectedCountryByIp) {
                    detectedCountries.push(detectedCountryByIp);
                }
            } catch (ex) {
                Logger.logException('PreferencesBar', ex, Logger.Levels.info);
            }

            return detectedCountries;
        }
    },
    methods: {
        show() {
            return this.init().then(() => {
                this.visible = true;
            });
        },
        hide() {
            this.visible = false;
        },
        validateAndSubmit() {
            if (this.enableCountry && this.countries !== null) {
                this.closeEditCountry();
                if (!this.country) {
                    if (this.$refs.editCountry) {
                        this.$refs.editCountry.$el.classList.add('validation', 'validation--required');
                    }

                    return;
                }
                this.$store.dispatch('PUSH_SETTING', {key: 'country', value: this.country});
            }

            this.$store.dispatch('PUSH_SETTING', {key: 'consentLevel', value: this.bitmask});
            this.$store.dispatch('PUSH_SETTING', {key: 'consentLevelSet', value: true});
            PublicEventService.emit('cookie-consent', {level: this.bitmask});
            this.hide();
        },
        emitSize() {
            Vue.nextTick(() => {
                this.$parent.$emit('emit-size');
            });
        },
        editCountry() {
            this.countryPanelOpen = true;
            if (this.$refs.editCountry && this.$refs.editCountry.$el) {
                this.$refs.editCountry.$el.classList.remove('validation', 'validation--required');
            }
            Vue.nextTick(() => {
                if (this.$refs.countrySelector) {
                    this.$refs.countrySelector.focus();
                }
            });
        },
        countryChanged(country) {
            if (country !== null) {
                setTimeout(() => {
                    /*
                     This works around an issue where the keydown.enter event in the autocomplete -> input is also
                     applied on the editCountry button.  This causes to close and immediately reopen the edit country
                     panel. Suspecting a virtual dom issue. Should recheck with newer version of Vue.
                      */
                    this.closeEditCountry();
                }, 100);
            }
        },
        closeEditCountry() {
            this.countryPanelOpen = false;
            Vue.nextTick(() => {
                if (this.$refs.editCountry) {
                    this.$refs.editCountry.focus();
                }
            });
        },
        editCookies() {
            this.cookiePanelOpen = true;

            Vue.nextTick(() => {
                const checkBoxes = this.$el.querySelectorAll('.settings-selector--cookies .settings-panel--expanded .setting__checkbox');

                if (checkBoxes[2]) {
                    checkBoxes[2].focus();
                }
            });
        },
        cancelEditCookies() {
            this.cookiePanelOpen = false;
            Vue.nextTick(() => {
                if (this.$refs.editCookies) {
                    this.$refs.editCookies.focus();
                }
            });
        },
        focusCloseCountryPanel() {
            this.$refs.closeCountryPanel.focus();
        },
        setDetectedCountry() {
            if (!this.country && this.countries && Array.isArray(this.countries.country) && this.detectedCountry) {
                this.country = _find(this.countries.country, {'code': this.detectedCountry});
            }
        },
        init() {
            if (this.initialized) {
                return Promise.resolve();
            }

            if (this.initializing) {
                return this.initializing;
            }

            const dataPromises = [];

            if (this.enableCountry) {
                const countryPromises = [
                    this.$store.dispatch('FETCH_COUNTRIES'),
                    this.$store.dispatch('FETCH_COUNTRY')
                ];

                dataPromises.push(...countryPromises);
                Promise.all(countryPromises).then(this.setDetectedCountry);
            }
            dataPromises.push(this.getData());
            this.initializing = Promise.all(dataPromises)
                .then(() => {
                    this.initialized = true;
                    this.viewport.calculateResize();
                });

            return this.initializing;
        },
        getData() {
            return DataService.getData('preferences-bar', null, true)
                .then((data) => {
                    this.content = data;
                })
                .catch((err) => {
                    /* istanbul ignore next */
                    Logger.logMessage('PreferenceBar', `Error fetching preferences-bar content: ${ err.message }`, Logger.Levels.warning);
                });
        }
    },
    watch: {
        visible() {
            /* istanbul ignore next */
            this.emitSize();
        }
    },
    created() {
        this.consentLevel = new ConsentLevel(this.$settings.consentLevel || Defaults.suggestedConsentLevel);
        this.country = this.$settings.country;
    },
    mounted() {
        /* istanbul ignore next */
        if (!process.BROWSER || !this.$settings) {
            return;
        }

        PublicEventService.emit('cookie-consent', {level: this.$settings.consentLevel || Defaults.consentLevel});

        if (this.$settings.consentLevelSet) {
            return;
        }

        setTimeout(() => {
            this.visible = true;
        }, this.delay);
        this.init();
    }
});
