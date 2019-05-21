import { Vue, Component, Prop } from 'vue-property-decorator';
import { ContentHighlightProps } from './content-highlight.models';
import WithRender from './content-highlight.vue.html';

@WithRender
@Component({
    name: 'ContentHighlight',
})

export class ContentHighlight extends Vue implements ContentHighlightProps {
    @Prop({ type: String, required: true }) title!: ContentHighlightProps['title'];
    @Prop({ type: String }) subtitle?: ContentHighlightProps['subtitle'];
    @Prop({ type: String }) description?: ContentHighlightProps['description'];
    @Prop({ type: Object }) image?: ContentHighlightProps['image'];
    @Prop({ type: Object }) ctas?: ContentHighlightProps['ctas'];
    @Prop({ type: Boolean, required: true }) reversed!: ContentHighlightProps['reversed'];
}
