/** @format */
import { Vue, Component, Prop } from 'vue-property-decorator';
import { PageFooterProps } from './page-footer.models';
import WithRender from './page-footer.vue.html';

@WithRender
@Component({
    name: 'PageFooter',
})
export class PageFooter extends Vue implements PageFooterProps {
    @Prop({ type: String, required: true }) public copyrightLabel!: PageFooterProps['copyrightLabel'];
    @Prop({ type: String, required: true }) public countryCode!: PageFooterProps['countryCode'];
    @Prop({ type: Object, required: true }) public countrySelector!: PageFooterProps['countrySelector'];
    @Prop({ type: String, required: true }) public eventCountryChanged!: PageFooterProps['eventCountryChanged'];
    @Prop({ type: String, required: true }) public eventLanguageChanged!: PageFooterProps['eventLanguageChanged'];
    @Prop({ type: String, required: true }) public languageCode!: PageFooterProps['languageCode'];
    @Prop({ type: Object, required: true }) public localeSelector!: PageFooterProps['localeSelector'];
    @Prop({ type: Array, required: true }) public legalNavigation!: PageFooterProps['legalNavigation'];
    @Prop({ type: String, required: false }) public language?: PageFooterProps['language'];
    @Prop({ type: Array, required: true }) public navigation!: PageFooterProps['navigation'];

    private currentlyEditing: string | null = null;

    private get showCountrySelector(): boolean {
        return !this.currentlyEditing || this.currentlyEditing === 'countrySelector';
    }

    private get showLanguageSelector(): boolean {
        // hacky solution
        // datasource will have the type, the default language, plus any other languages available
        if (Object.keys(this.localeSelector.datasource).length < 3) {
            return false;
        }

        return !this.currentlyEditing || this.currentlyEditing === 'languageSelector';
    }

    private toggleSelector(type: string): void {
        this.currentlyEditing = type;
    }

    private countryChangedHandler(code: string): void {
        this.$emit(this.eventCountryChanged, code);
    }

    private languageChangedHandler(code: string): void {
        this.$emit(this.eventLanguageChanged, code);
    }
}
