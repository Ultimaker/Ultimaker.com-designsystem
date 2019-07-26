/** @format */

import { StepRowAnimation } from 'js/mixins/step-row-animation/step-row-animation';
import { Component, Mixins, Prop } from 'vue-property-decorator';
import { SearchResultsProps } from './search-results.models';
import WithRender from './search-results.vue.html';

@WithRender
@Component({
    name: 'SearchResults',
})
export class SearchResults extends Mixins(StepRowAnimation) implements SearchResultsProps {
    @Prop({ type: String, required: true }) eventLoadMore!: SearchResultsProps['eventLoadMore'];
    @Prop({ type: String, required: true }) eventSubmitSearch!: SearchResultsProps['eventSubmitSearch'];
    @Prop({ type: Boolean, required: true }) isLoading!: SearchResultsProps['isLoading'];
    @Prop({ type: String }) label!: SearchResultsProps['label'];
    @Prop({ type: String }) placeholder!: SearchResultsProps['placeholder'];
    @Prop({ type: Array, required: true }) searchResults!: SearchResultsProps['searchResults'];
    @Prop({ type: Boolean, required: true }) showLoadMore!: SearchResultsProps['showLoadMore'];
    @Prop({ type: String, required: true }) terms!: SearchResultsProps['terms'];

    get computedTitle() {
        return this.searchResults.length ? `Search results for: “${this.terms}”` : `No results for “${this.terms}”`;
    }

    loadMore() {
        this.$emit(this.eventLoadMore);
    }

    submitSearch(payload) {
        this.$emit(this.eventSubmitSearch, payload);
    }
}
