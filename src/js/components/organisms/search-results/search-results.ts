/** @format */

import { Vue, Component, Prop } from 'vue-property-decorator';
import { SearchResultProps } from '../../molecules/search-result/search-result.models';
import { SearchResultsProps } from './search-results.models';
import WithRender from './search-results.vue.html';

@WithRender
@Component({
    name: 'SearchResults',
})
export class SearchResults extends Vue implements SearchResultsProps {
    @Prop({ type: String, required: true }) eventName!: SearchResultsProps['eventName'];
    @Prop({ type: Boolean, required: true }) isLoading!: SearchResultsProps['isLoading'];
    @Prop({ type: Array, required: true }) searchResults!: SearchResultProps[];
    @Prop({ type: Boolean, required: true }) showLoadMore!: SearchResultsProps['showLoadMore'];
    @Prop({ type: String, required: true }) terms!: SearchResultProps['terms'];

    loadMore() {
        this.$emit(this.eventName);
    }
}
