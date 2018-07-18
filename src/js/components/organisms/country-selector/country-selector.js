import {mapGetters} from 'vuex';
import _find from 'lodash/find';

export default {
    name: 'country-selector',
    template: require('./country-selector.html'),
    data: () => ({
        initialized: false,
        initPromise: null,
        country: {},
        selectedCountry: {}
    }),
    props: {
        placeholder: {
            type: String,
            default: ''
        },
        value: {
            type: Object,
            default: null
        }
    },
    computed: {
        ...mapGetters(['countries', 'detectedCountry']),
        detectedCountries() {
            const detectedCountries = [];

            try {
                const detectedCountryByIp = _find(this.countries, {'code': this.detectedCountry.code});

                if (detectedCountryByIp) {
                    detectedCountries.push(detectedCountryByIp);
                }
            } catch (ex) {
                // parant scope should do error handling
                throw ex;
            }

            return detectedCountries;
        }
    },
    watch: {
        selectedCountry() {
            this.$emit('input', this.selectedCountry);
        }
    },
    methods: {
        init() {
            if (this.initPromise !== null) {
                return this.initPromise;
            }

            const countryPromises = [
                this.$store.dispatch('FETCH_COUNTRIES'),
                this.$store.dispatch('FETCH_COUNTRY')
            ];

            this.initPromise = Promise.all(countryPromises).then(() => {
                this.initialized = true;
                if ((this.value && !this.value.code) && (this.selectedCountry && !this.selectedCountry.code)) {
                    this.selectedCountry = _find(this.countries, {'code': this.detectedCountry.code});
                }
            });

            return this.initPromise;
        },
        async focus() {
            await this.initPromise;
            await this.$nextTick();

            this.$refs.autocomplete.focus();
        },
        focusClose() {
            this.$refs.closeCountryPanel.focus();
        },
        close() {
            this.$emit('close');
        },
        countryChanged(country) {
            return new Promise((resolve, reject) => {
                if (country !== null) {
                    setTimeout(() => {
                        /*
                        This works around an issue where the keydown.enter event in the autocomplete -> input is also
                        applied on the editCountry button.  This causes to close and immediately reopen the edit country
                        panel. Suspecting a virtual dom issue. Should recheck with newer version of Vue.
                        */
                        this.selectedCountry = country;
                        resolve(country);
                    }, 100);
                }
            });
        }
    },
    beforeMount() {
        this.init();
    }
};
