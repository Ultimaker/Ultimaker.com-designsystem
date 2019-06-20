import { Vue, Component, Prop } from 'vue-property-decorator';
import { ArticleCtasProps } from './article-ctas.models';
import WithRender from './article-ctas.vue.html';

@WithRender
@Component({
    name: 'ArticleCtas',
})

export class ArticleCtas extends Vue implements ArticleCtasProps {
    @Prop({ type: Object, required: false }) ctas?: ArticleCtasProps['ctas'];
}
