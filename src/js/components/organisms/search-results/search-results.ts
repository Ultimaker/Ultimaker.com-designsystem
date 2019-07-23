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
    @Prop({ type: Array, required: true }) searchResults!: SearchResultProps[];
}
