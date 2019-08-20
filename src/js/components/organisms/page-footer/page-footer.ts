/** @format */
import { Vue, Component, Prop } from 'vue-property-decorator';
import { PageFooterProps } from './page-footer.models';
import WithRender from './page-footer.vue.html';

@WithRender
@Component({
    name: 'PageFooter',
})
export class PageFooter extends Vue implements PageFooterProps {
    @Prop({ type: String, required: true }) copyrightLabel!: PageFooterProps['copyrightLabel'];
    @Prop({ type: String, required: true }) countryCode!: PageFooterProps['countryCode'];
    @Prop({ type: Object, required: true }) countrySelector!: PageFooterProps['countrySelector'];
    @Prop({ type: String, required: true }) eventCountryChanged!: PageFooterProps['eventCountryChanged'];
    @Prop({ type: String, required: true }) eventLanguageChanged!: PageFooterProps['eventLanguageChanged'];
    @Prop({ type: String, required: true }) languageCode!: PageFooterProps['languageCode'];
    @Prop({ type: Object, required: true }) localeSelector!: PageFooterProps['localeSelector'];
    @Prop({ type: Array, required: true }) legalNavigation!: PageFooterProps['legalNavigation'];
    @Prop({ type: String, required: false }) language?: PageFooterProps['language'];
    @Prop({ type: Array, required: true }) navigation!: PageFooterProps['navigation'];

    currentlyEditing: string | null = null;

    get showCountrySelector() {
        return !this.currentlyEditing || this.currentlyEditing === 'countrySelector';
    }

    get showLanguageSelector() {
        // hacky solution
        // datasource will have the type, the default language, plus any other languages available
        if (Object.keys(this.localeSelector.datasource).length < 3) {
            return false;
        }

        return !this.currentlyEditing || this.currentlyEditing === 'languageSelector';
    }

    toggleSelector(type) {
        this.currentlyEditing = type;
    }

    countryChangedHandler(code: string) {
        this.$emit(this.eventCountryChanged, code);
    }

    languageChangedHandler(code: string) {
        this.$emit(this.eventLanguageChanged, code);
    }
}
