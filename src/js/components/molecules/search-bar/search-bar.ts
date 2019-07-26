/** @format */

import { Vue, Component, Prop } from 'vue-property-decorator';
import { Search } from '@ultimaker/ultimaker.com-model-definitions/dist/molecules/search/Search';
import WithRender from './search-bar.vue.html';

@WithRender
@Component({
    name: 'search-bar',
})
export class SearchBar extends Vue implements Search {
    @Prop({ type: String, required: true }) label!: Search['label'];
    @Prop({ type: String, required: true }) placeholder!: Search['placeholder'];
    @Prop({ type: Boolean, required: false, default: false }) openState!: boolean;

    searchValue = '';

    close() {
        if (this.openState) {
            this.$emit('close');
        }
    }

    doSearch() {
        if (this.searchValue !== '') {
            // temporary solution until search is implemented
            // @ts-ignore
            window.location = `/search?search=${encodeURIComponent(this.searchValue)}`;
            this.close();
        }
    }

    onBlur() {
        if (this.searchValue === '') {
            this.close();
        }
    }

    focusInput() {
        // @ts-ignore
        this.$refs.search__input.focus();
    }
}
