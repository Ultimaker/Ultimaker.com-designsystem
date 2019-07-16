/** @format */

import { Vue, Component, Prop } from 'vue-property-decorator';
import { ArticleTableProps } from './article-table.models';
import WithRender from './article-table.vue.html';

@WithRender
@Component({
    name: 'ArticleTable',
})
export class ArticleTable extends Vue implements ArticleTableProps {
    @Prop({ type: String, required: true })
    table!: ArticleTableProps['table'];
}
