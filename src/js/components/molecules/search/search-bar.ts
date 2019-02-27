import { Vue, Component, Prop } from 'vue-property-decorator';
import { Search } from '@ultimaker/ultimaker.com-model-definitions/dist/molecules/search/Search';

@Component({
    name: 'search-bar',
    template: require('./search-bar.html'),
})

export default class SearchBar extends Vue implements Search {
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
            window.location = `https://ultimaker.com/search?search=${ encodeURIComponent(this.searchValue) }`;
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