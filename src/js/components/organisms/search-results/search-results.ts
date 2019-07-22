/** @format */

import { Vue, Component } from 'vue-property-decorator';
import { SearchResultsProps } from './search-results.models';
import WithRender from './search-results.vue.html';

@WithRender
@Component({
    name: 'SearchResults',
})
export class SearchResults extends Vue implements SearchResultsProps {}
