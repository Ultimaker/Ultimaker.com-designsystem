import { Vue, Component, Prop } from 'vue-property-decorator';
import { ArticleContentProps } from './article-content.models';
import WithRender from './article-content.vue.html';

@WithRender
@Component({
    name: 'ArticleContent',
})

export class ArticleContent extends Vue implements ArticleContentProps {
    @Prop({ type: Array, required: true })
    molecules!: ArticleContentProps['molecules'];
}
