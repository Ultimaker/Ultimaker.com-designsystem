import { Component, Prop, Vue } from 'vue-property-decorator';
import CountrySelector from 'components/organisms/country-selector';
import IconButton from 'components/molecules/icon-button';
import { CountrySelectorInterface } from 'components/organisms/country-selector/country-selector-models';
import { CountryAutoCompleteField } from '@ultimaker/ultimaker.com-model-definitions/dist/molecules/fields/CountryAutoCompleteField';
import WithRender from './locale-selector.vue.html';

@WithRender
@Component({
    name: 'locale-selector',
})
export default class LocaleSelector extends Vue implements CountrySelectorInterface {
    @Prop({ type: String, default: null }) label!: CountryAutoCompleteField['label'];
    @Prop({ type: String, default: '' }) placeholder!: CountryAutoCompleteField['placeholder'];
    @Prop({ type: String, default: null }) highlightedLabel!: CountryAutoCompleteField['highlightedLabel'];
    @Prop({ type: String, default: '' }) suggestionsLabel!: CountryAutoCompleteField['suggestionsLabel'];
    @Prop({ required: true }) datasource!: CountryAutoCompleteField['datasource'];
    @Prop({ type: Object, default: null }) country!: any;

    ready:boolean = false;
    countrySelectorOpen: boolean = false;
    countryInput:any = null;

    $refs!: {
        countrySelector: CountrySelector,
        countrySelectorToggle: IconButton,
    };

    get currentCountryLabel() {
        if (this.country && this.country.currency && this.country.currency.symbol) {
            return `${this.country.name} - ${this.country.currency.symbol}`;
        }

        if (this.country) {
            return `${this.country.name}`;
        }

        return 'Please select your country';
    }
    get currentCountryAriaLabel() {
        return `Change your country, currently: ${this.country.name}`;
    }

    beforeMount() {
        this.countryInput = this.country;
    }

    mounted() {
        // Remark: $ref doesn't work with v-if, but we don't want this component
        //         to render on the server. This prevents SSR and enables the $ref.
        this.ready = true;
    }

    async toggleCountrySelector() {
        this.countrySelectorOpen = !this.countrySelectorOpen;
        if (this.countrySelectorOpen && this.$refs.countrySelector) {
            await this.$refs.countrySelector.focus();
        } else if (!this.countrySelectorOpen && this.$refs.countrySelectorToggle) {
            await this.$nextTick();
            this.$refs.countrySelectorToggle.focus();
        }
    }

    async setCountry() {
        this.$emit('country-changed', { country: this.countryInput });
        await this.toggleCountrySelector();
    }
}
