import { Component, Prop, Vue } from 'vue-property-decorator';
import CountrySelector from 'components/organisms/country-selector';

@Component({
    name: 'locale-selector',
    template: require('./locale-selector.html'),
})
export default class LocaleSelector extends Vue {
    @Prop({ type: Object, required: true })
    country!:any;

    @Prop({ type: Object, required: true })
    datasource!:any;

    @Prop({ type: String, required: true })
    countryInputPlaceholderLabel!:string;

    @Prop({ type: String, required: true })
    countryDetectedLabel!:string;

    @Prop({ type: String, required: true })
    countrySuggestionsLabel!:string;

    countrySelectorOpen: boolean = false;
    countryInput:any = null;

    public $refs!: {
        countrySelector: CountrySelector,
    };

    get currentCountryLabel() {
        if (this.country && this.country.currency && this.country.currency.symbol) {
            return `${ this.country.name } - ${ this.country.currency.symbol }`;
        }

        if (this.country) {
            return `${ this.country.name }`;
        }

        return 'Please select your country';
    }
    get currentCountryAriaLabel() {
        return `Change your country, currently: ${ this.country.name }`;
    }

    beforeMount() {
        this.countryInput = this.country;
    }

    toggleCountrySelector() {
        this.countrySelectorOpen = !this.countrySelectorOpen;
        if (this.countrySelectorOpen && this.$refs.countrySelector) {
            Vue.nextTick(async () => {
                await this.$refs.countrySelector.focus();
            });
        }
    }

    setCountry() {
        this.$emit('country-changed', { country: this.countryInput });
        this.toggleCountrySelector();
    }
}
