import { Vue, Component, Prop, Watch } from 'vue-property-decorator';
import { CountryAutoCompleteField } from '@ultimaker/ultimaker.com-model-definitions/dist/molecules/fields/CountryAutoCompleteField';
import { AutoCompleteItem } from 'components/molecules/auto-complete/auto-complete.models';
import AutoComplete from 'components/molecules/auto-complete/auto-complete';
import IconButton from 'components/molecules/icon-button';
import { CountrySelectorInterface } from './country-selector-models';

@Component({
    name: 'country-selector',
    template: require('./country-selector.html'),
})
export default class CountrySelector extends Vue implements CountrySelectorInterface {
    @Prop({ type: Object, default: null }) value!: AutoCompleteItem;

    // Model Definition
    @Prop({ type: String, default: null }) label!: CountryAutoCompleteField['label'];
    @Prop({ type: String, default: '' }) placeholder!: CountryAutoCompleteField['placeholder'];
    @Prop({ type: String, default: null }) highlightedLabel!: CountryAutoCompleteField['highlightedLabel'];
    @Prop({ type: String, default: '' }) suggestionsLabel!: CountryAutoCompleteField['suggestionsLabel'];
    @Prop({ required: true }) datasource!: CountryAutoCompleteField['datasource'];
    @Prop({ type: Object, default: null }) country!: any;

    initPromise: Promise<any> | null = null;
    countryInput: AutoCompleteItem | null = null;
    selectedCountry: AutoCompleteItem | null = null;

    $refs!: {
        autocomplete: AutoComplete;
        closeCountryPanel: IconButton;
    };

    @Watch('selectedCountry')
    onSelectedCountry(): void {
        this.$emit('input', this.selectedCountry);
    }

    get detectedCountries() {
        const detectedCountries: AutoCompleteItem[] = [];

        if (!this.country || !this.country.code) {
            return detectedCountries;
        }

        try {
            const detectedCountryByIp = this.datasource[this.country.code];

            if (detectedCountryByIp) {
                detectedCountries.push({
                    title: detectedCountryByIp,
                    value: this.country.code,
                } as AutoCompleteItem);
            }
        } catch (ex) {
            // parent scope should do error handling
            throw ex;
        }

        return detectedCountries;
    }

    async focus(): Promise<any> {
        await this.initPromise;
        await this.$nextTick();

        this.$refs.autocomplete.focus();
        this.$refs.autocomplete.calculateDirection();
    }

    focusClose(): void {
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
}
