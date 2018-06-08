import Vue from 'vue';
import {mapGetters} from 'vuex';
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
        country: {},
        content: {},
        consentLevel: null,
        viewport: new ViewportUtil()
    }),
    computed: {
        ...mapGetters(['$settings']),
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
        countryValid() {
            return this.country && this.country !== null && this.country.hasOwnProperty('name');
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
            if (this.enableCountry) {
                this.closeEditCountry();
                if (!this.countryValid) {
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
                if (this.$refs.firstEditableCookieCheckbox) {
                    this.$refs.firstEditableCookieCheckbox.focus();
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
        init() {
            if (this.initialized) {
                return Promise.resolve();
            }

            if (this.initializing) {
                return this.initializing;
            }

            const dataPromises = [];

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
    beforeMount() {
        this.consentLevel = new ConsentLevel(this.$settings.consentLevel || Defaults.suggestedConsentLevel);

        if (this.$settings.country !== null) {
            this.country = this.$settings.country;
        }
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
