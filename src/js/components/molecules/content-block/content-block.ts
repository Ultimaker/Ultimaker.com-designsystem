import { Vue, Component, Prop } from 'vue-property-decorator';
import { ContentBlock as IContentBlock } from '@ultimaker/ultimaker.com-model-definitions/dist/molecules/blocks/ContentBlock';

@Component({
    name: 'ContentBlock',
    template: require('./content-block.html'),
})

export default class ContentBlock extends Vue implements IContentBlock {
    @Prop({ type: String, required: true }) title!: IContentBlock['title'];
    @Prop({ type: String, required: true }) description!: IContentBlock['description'];
    @Prop({ type: Object }) image?: IContentBlock['image'];
    @Prop({ type: Object }) cta?: IContentBlock['cta'];

    getClassNames(type): string {
        return {
            ContentButton: 'button',
            ContentLink: 'link link--medium',
            YoutubeLink: '',
        }[type] || '';
    }
}
