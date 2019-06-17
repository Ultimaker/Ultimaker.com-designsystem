import { Vue, Component, Prop } from 'vue-property-decorator';
import { ArticleImageProps } from './article-image.models';
import WithRender from './article-image.vue.html';

@WithRender
@Component({
    name: 'ArticleImage',
})

export class ArticleImage extends Vue implements ArticleImageProps {
    @Prop({ type: Object, required: false }) image?: ArticleImageProps['image'];
    @Prop({ type: String, required: false }) caption?: ArticleImageProps['caption'];
}
