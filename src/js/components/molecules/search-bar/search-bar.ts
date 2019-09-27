/** @format */

import { Vue, Component, Prop } from 'vue-property-decorator';
import WithRender from './search-bar.vue.html';

import { SearchBarProps } from 'components/molecules/search-bar/search-bar.models';

@WithRender
@Component({
    name: 'search-bar',
})
export class SearchBar extends Vue implements SearchBarProps {
    @Prop({ type: String, required: true }) public label!: SearchBarProps['label'];
    @Prop({ type: String, required: false, default: null }) public languageCode!: string;
    @Prop({ type: String, required: true }) public placeholder!: SearchBarProps['placeholder'];
    @Prop({ type: Boolean, required: false, default: false }) public openState!: boolean;

    public searchValue = '';

    public get action(): string {
        let prefix = '';

        if (this.languageCode && this.languageCode !== 'en') {
            prefix = `/${this.languageCode}`;
        }

        return `${prefix}/search`;
    }

    public close(): void {
        if (this.openState) {
            this.$emit('close');
        }
    }

    public handleSubmit(): void {
        if (!this.searchValue.length) {
            return;
        }

        this.close();
        window.location.href = `${this.action}?search=${encodeURIComponent(this.searchValue)}`;
    }

    public onBlur(): void {
        if (this.searchValue === '') {
            this.close();
        }
    }

    public focusInput(): void {
        (this.$refs['search-bar__input'] as HTMLInputElement).focus();
    }
}
