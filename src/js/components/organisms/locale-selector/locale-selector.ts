/** @format */
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import { LocaleSelectorProps } from './locale-selector.models';
import WithRender from './locale-selector.vue.html';

@WithRender
@Component({
    name: 'locale-selector',
})
export class LocaleSelector extends Vue implements LocaleSelectorProps {
    @Prop({ type: Object, required: true }) datasource!: LocaleSelectorProps['datasource'];
    @Prop({ type: String, required: true }) eventLocaleChanged!: string;
    @Prop({ type: String, default: null }) highlightedLabel!: LocaleSelectorProps['highlightedLabel'];
    @Prop({ type: String, default: '' }) iconName!: string;
    @Prop({ type: String, required: true }) initialIsoCode!: string;
    @Prop({ type: String, default: null }) label!: LocaleSelectorProps['label'];
    @Prop({ type: String, default: '' }) placeholder!: LocaleSelectorProps['placeholder'];
    @Prop({ type: Boolean, required: false }) showSuggestions?: boolean;
    @Prop({ type: String, default: '' }) suggestionsLabel!: LocaleSelectorProps['suggestionsLabel'];
    @Prop({ type: String, required: true }) type!: string;

    localeSelectorOpen: boolean = false;
    currentIsoCode: string = this.initialIsoCode;

    get ariaLabel(): string {
        return `Change your locale, currently: ${this.datasource[this.currentIsoCode]}`;
    }

    get buttonText(): string {
        return this.currentIsoCode.toUpperCase();
    }

    get iconButtonText(): string {
        return this.datasource[this.currentIsoCode];
    }

    handleLocaleChange(code: string | null): void {
        if (!code) {
            this.toggleLocaleSelector();
            return;
        }

        if (this.currentIsoCode !== code) {
            this.currentIsoCode = code;
            this.$emit(this.eventLocaleChanged, code);
        }

        this.toggleLocaleSelector();
    }

    toggleLocaleSelector(): void {
        this.localeSelectorOpen = !this.localeSelectorOpen;

        if (this.localeSelectorOpen) {
            this.$emit('is-editing', this.type);
            return;
        }

        this.$emit('is-editing', null);
    }

    localeSelectorClickOutsideHandler(): void {
        if (this.localeSelectorOpen) {
            this.localeSelectorOpen = false;
            this.$emit('is-editing', null);
        }
    }

    @Watch('initialIsoCode')
    onInitialIsoCodeChange() {
        this.currentIsoCode = this.initialIsoCode;
    }
}
