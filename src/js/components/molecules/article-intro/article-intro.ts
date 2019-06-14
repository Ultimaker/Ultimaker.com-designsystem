import { Vue, Component, Prop } from 'vue-property-decorator';
import { ArticleIntroProps } from './article-intro.models';
import WithRender from './article-intro.vue.html';

@WithRender
@Component({
    name: 'ArticleIntro',
})

export class ArticleIntro extends Vue implements ArticleIntroProps {
    @Prop({ type: String, required: true })
    intro!: ArticleIntroProps['intro'];
}
