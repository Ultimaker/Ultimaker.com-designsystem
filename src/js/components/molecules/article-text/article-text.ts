import { Vue, Component, Prop } from 'vue-property-decorator';
import { ArticleTextProps } from './article-text.models';
import WithRender from './article-text.vue.html';

@WithRender
@Component({
    name: 'ArticleText',
})

export class ArticleText extends Vue implements ArticleTextProps {
    @Prop({ type: String, required: true }) text!: ArticleTextProps['text'];
}
