import { Vue, Component, Prop, Watch } from 'vue-property-decorator';
import { mapGetters } from 'vuex';

import { CountryAutoCompleteField } from "@ultimaker/ultimaker.com-model-definitions/dist/molecules/fields/CountryAutoCompleteField";

import _find from 'lodash/find';

interface IValue {
    code: string;
}

interface ISelectedCountry {
    code: string;
}

@Component({
    name: 'country-selector',
    template: require('./country-selector.html'),
    computed: {
        ...mapGetters('countries', {
            country: 'country',
            countries: 'countries',
        }),
    },
})

export default class CountrySelector extends Vue implements CountryAutoCompleteField {
    @Prop({ type: Object, default: null }) value!: IValue;

    //Model Definition
    @Prop({ type: String, default: null }) label!: CountryAutoCompleteField['label'];
    @Prop({ type: String, default: '' }) placeholder!: CountryAutoCompleteField['placeholder'];
    @Prop({ type: String, default: null }) highlightedLabel!: CountryAutoCompleteField['highlightedLabel'];
    @Prop({ type: String, default: '' }) suggestionsLabel!: CountryAutoCompleteField['suggestionsLabel'];
    @Prop({ type: String, default: '' }) datasource!: CountryAutoCompleteField['datasource'];

    country!: any;
    countries!: any;

    initialized: boolean = false;
    initPromise: Promise<any> | null = null;
    countryInput: object = {};
    selectedCountry: ISelectedCountry = {
        code: '',
    };

    @Watch('selectedCountry')
    onSelectedCountry(): void {
        this.$emit('input', this.selectedCountry);
    }

    get detectedCountries() {
        const detectedCountries = [];

        if (!this.country || !this.country.code) {
            return detectedCountries;
        }

        try {
            const detectedCountryByIp = _find(this.countries, { code: this.country.code });

            if (detectedCountryByIp) {
                // @ts-ignore
                detectedCountries.push(detectedCountryByIp);
            }
        } catch (ex) {
            // parent scope should do error handling
            throw ex;
        }

        return detectedCountries;
    }

    init(): Promise<any> {
        if (this.initPromise !== null) {
            return this.initPromise;
        }

        const countryPromises = [
            this.$store.dispatch('FETCH_COUNTRIES'),
            this.$store.dispatch('FETCH_COUNTRY'),
        ];

        this.initPromise = Promise.all(countryPromises).then(() => {
            this.initialized = true;
            if ((this.value && !this.value.code) && (this.selectedCountry && !this.selectedCountry.code)) {
                this.selectedCountry = _find(this.countries, { code: this.country.code });
            }
        });

        return this.initPromise;
    }

    async focus(): Promise<any> {
        await this.initPromise;
        await this.$nextTick();
        // @ts-ignore
        this.$refs.autocomplete.focus();
    }

    focusClose(): void {
        // @ts-ignore
        this.$refs.closeCountryPanel.focus();
    }
    close(): void {
        this.$emit('close');
    }
    countryChanged(country): Promise<any> {
        return new Promise((resolve) => {
            if (country !== null) {
                setTimeout(() => {
                    /*
                    This works around an issue where the keydown.enter event in the autocomplete -> input is also
                    applied on the editCountry button.  This causes to close and immediately reopen the edit country
                    panel. Suspecting a virtual dom issue. Should recheck with newer version of Vue.
                    */
                    this.selectedCountry = country;
                    resolve(country);
                },         100);
            }
        });
    }

    beforeMount(): void {
        this.init();
    }

}
