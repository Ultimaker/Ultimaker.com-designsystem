import { Vue, Component, Prop } from 'vue-property-decorator';
import { ContentCoverProps } from './content-cover.models';
import WithRender from './content-cover.vue.html';

@WithRender
@Component({
    name: 'ContentCover',
})

export class ContentCover extends Vue implements ContentCoverProps {
    @Prop({ type: String, required: true }) title!: ContentCoverProps['title'];
    @Prop({ type: String, required: true }) description!: ContentCoverProps['description'];
    @Prop({ type: Object }) cta?: ContentCoverProps['cta'];
    @Prop({ type: Object }) image?: ContentCoverProps['image'] | undefined;

    getClassNames(type: string): string {
        return {
            ContentButton: 'content-cover__button button',
            ContentLink: 'content-cover__link link link--medium',
            YoutubeLink: 'content-cover__link link link--medium',
        }[type] || '';
    }
}
