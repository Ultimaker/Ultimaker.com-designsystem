/** @format */

import { Vue, Component, Prop } from 'vue-property-decorator';
import { SearchResultProps } from './search-result.models';
import WithRender from './search-result.vue.html';
import mark from './helpers/mark';

@WithRender
@Component({
    name: 'SearchResult',
})
export class SearchResult extends Vue implements SearchResultProps {
    @Prop({ type: String, required: true }) terms!: SearchResultProps['terms'];
    @Prop({ type: String, required: true }) title!: SearchResultProps['title'];
    @Prop({ type: String, required: true }) link!: SearchResultProps['link'];
    @Prop({ type: String, required: true }) snippet!: SearchResultProps['snippet'];
    @Prop({ type: String, required: true }) formattedUrl!: SearchResultProps['formattedUrl'];

    get computedTitle(): string {
        return mark(this.title, this.terms)
    }

    get computedSnippet(): string {
        return mark(this.snippet, this.terms);
    }
}
