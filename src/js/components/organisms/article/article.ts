import { Vue, Component, Prop } from 'vue-property-decorator';
import { ArticleProps } from './article.models';
import WithRender from './article.vue.html';

@WithRender
@Component({
    name: 'Article',
})

export class Article extends Vue implements ArticleProps {
    @Prop({ type: Array, required: true })
    molecules!: ArticleProps['molecules'];
}
