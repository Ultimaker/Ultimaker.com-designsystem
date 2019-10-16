/** @format */
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import { LocaleAutoCompleteField } from '@ultimaker/ultimaker.com-model-definitions/dist/molecules/fields/LocaleAutoCompleteField';
import WithRender from './locale-selector.vue.html';
import Events from 'constants/events';
import EventNames from 'constants/event-names';

@WithRender
@Component({
    name: 'locale-selector',
})
export class LocaleSelector extends Vue {
    @Prop({ type: Object, required: true }) public datasource!: LocaleAutoCompleteField['datasource'];
    @Prop({ type: String, required: true }) public eventLocaleChanged!: string;
    @Prop({ type: String, default: null }) public highlightedLabel!: LocaleAutoCompleteField['highlightedLabel'];
    @Prop({ type: String, default: '' }) public iconName!: string;
    @Prop({ type: String, required: true }) public initialIsoCode!: string;
    @Prop({ type: String, default: null }) public label!: LocaleAutoCompleteField['label'];
    @Prop({ type: Number, default: 3 }) public minChar!: number;
    @Prop({ type: String, default: '' }) public placeholder!: LocaleAutoCompleteField['placeholder'];
    @Prop({ type: Boolean, required: false }) public showSuggestions?: boolean;
    @Prop({ type: String, default: '' }) public suggestionsLabel!: LocaleAutoCompleteField['suggestionsLabel'];
    @Prop({ type: String, required: true }) public type!: string;

    public $emitPublic;

    private localeSelectorOpen: boolean = false;
    private currentIsoCode: string = this.initialIsoCode;

    private get ariaLabel(): string {
        return `Change your locale, currently: ${this.datasource[this.currentIsoCode]}`;
    }

    private get buttonText(): string {
        return this.currentIsoCode.toUpperCase();
    }

    private get iconButtonText(): string {
        return this.datasource[this.currentIsoCode];
    }

    private get acceptLanguage(): string {
        // @ts-ignore
        const serverContext = this.$parent.$store.getters['globals/serverContext'];

        if (serverContext === undefined) {
            return 'no-accept-language';
        }

        if (!serverContext.headers) {
            return 'no-accept-language';
        }

        if (!serverContext.headers['accept-language']) {
            return 'no-accept-language';
        }
        console.log(serverContext.headers);
        return serverContext.headers['accept-language'];
    }

    private handleLocaleChange(code: string | null): void {
        if (!code) {
            this.toggleLocaleSelector();
            return;
        }

        if (this.currentIsoCode !== code) {
            this.$emitPublic(Events.change, {
                dataType: EventNames.languageChange,
                data: {
                    fromLanguage: this.currentIsoCode,
                    toLanguage: code,
                    acceptLanguage: this.acceptLanguage,
                },
            });
            this.currentIsoCode = code;
            // this.$emit(this.eventLocaleChanged, code);
        }

        this.toggleLocaleSelector();
    }

    private toggleLocaleSelector(): void {
        this.localeSelectorOpen = !this.localeSelectorOpen;

        if (this.localeSelectorOpen) {
            this.$emit('is-editing', this.type);
            return;
        }

        this.$emit('is-editing', null);
    }

    private localeSelectorClickOutsideHandler(): void {
        if (this.localeSelectorOpen) {
            this.localeSelectorOpen = false;
            this.$emit('is-editing', null);
        }
    }

    @Watch('initialIsoCode')
    private onInitialIsoCodeChange(): void {
        this.currentIsoCode = this.initialIsoCode;
    }
}
