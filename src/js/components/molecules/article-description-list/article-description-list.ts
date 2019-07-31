/** @format */

import { Vue, Component, Prop } from 'vue-property-decorator';
import { ArticleDescriptionListProps } from './article-description-list.models';
import WithRender from './article-description-list.vue.html';

@WithRender
@Component({
    name: 'ArticleDescriptionList',
})
export class ArticleDescriptionList extends Vue implements ArticleDescriptionListProps {
    @Prop({ type: Array, required: true }) descriptions!: ArticleDescriptionListProps['descriptions'];
}
