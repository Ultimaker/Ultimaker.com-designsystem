import { Vue, Component, Prop } from 'vue-property-decorator';
import { HeroArticleProps } from './hero-article.models';
import WithRender from './hero-article.vue.html';

@WithRender
@Component({
    name: 'HeroArticle',
})

export class HeroArticle extends Vue implements HeroArticleProps {
    @Prop({ type: String, required: true }) title!: HeroArticleProps['title'];
    @Prop({ type: String, required: false }) subtitle?: HeroArticleProps['subtitle'];
    @Prop({ type: Object, required: true }) image!: HeroArticleProps['image'];
}
