import { Vue, Component, Prop } from 'vue-property-decorator';
import { ArticleHeaderProps } from './article-header.models';
import WithRender from './article-header.vue.html';

@WithRender
@Component({
    name: 'ArticleHeader',
})

export class ArticleHeader extends Vue implements ArticleHeaderProps {
    @Prop({ type: Object, required: true }) author!: ArticleHeaderProps['author'];
    @Prop({ type: String, required: true }) publishedDate!: ArticleHeaderProps['publishedDate']
}