/** @format */

import { Vue, Component } from 'vue-property-decorator';
import { SearchResultProps } from './search-result.models';
import WithRender from './search-result.vue.html';

@WithRender
@Component({
    name: 'SearchResult',
})
export class SearchResult extends Vue implements SearchResultProps {}
