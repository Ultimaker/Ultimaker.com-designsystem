import { Vue, Component, Prop } from 'vue-property-decorator';
import { ArticleVideoProps } from './article-video.models';
import WithRender from './article-video.vue.html';

@WithRender
@Component({
    name: 'ArticleVideo',
})

export class ArticleVideo extends Vue implements ArticleVideoProps {
    @Prop({ type: Object, required: true })
    cta!: ArticleVideoProps['cta'];

    @Prop({ type: Object, required: false })
    overlay: ArticleVideoProps['overlay'];
}
