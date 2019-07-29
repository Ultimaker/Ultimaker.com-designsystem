/** @format */

import { Vue, Component, Prop } from 'vue-property-decorator';
import WithRender from './search-bar.vue.html';

import { SearchBarProps } from 'components/molecules/search-bar/search-bar.models';

@WithRender
@Component({
    name: 'search-bar',
})
export class SearchBar extends Vue implements SearchBarProps {
    @Prop({ type: String, required: true }) label!: SearchBarProps['label'];
    @Prop({ type: String, required: true }) placeholder!: SearchBarProps['placeholder'];
    @Prop({ type: Boolean, required: false, default: false }) openState!: boolean;

    searchValue = '';

    close() {
        if (this.openState) {
            this.$emit('close');
        }
    }

    handleSubmit() {
        if (!this.searchValue.length) {
            return;
        }

        this.close();
        window.location.href = `/search?search=${encodeURIComponent(this.searchValue)}`;
    }

    onBlur() {
        if (this.searchValue === '') {
            this.close();
        }
    }

    focusInput() {
        (this.$refs['search-bar__input'] as HTMLInputElement).focus();
    }
}
