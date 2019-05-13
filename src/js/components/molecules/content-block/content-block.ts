import { Vue, Component, Prop } from 'vue-property-decorator';
import { ContentBlockProps } from './content-block.models';
import WithRender from './content-block.vue.html';

@WithRender
@Component({
    name: 'ContentBlock',
})

export default class ContentBlock extends Vue implements ContentBlockProps {
    @Prop({ type: String, required: true }) title!: ContentBlockProps['title'];
    @Prop({ type: String, required: true }) description!: ContentBlockProps['description'];
    @Prop({ type: Object }) image?: ContentBlockProps['image'];
    @Prop({ type: Object }) cta?: ContentBlockProps['cta'];

    getClassNames(type): string {
        return {
            ContentButton: 'button',
            ContentLink: 'link link--medium',
            YoutubeLink: '',
        }[type] || '';
    }
}
