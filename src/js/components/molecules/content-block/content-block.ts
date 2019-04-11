import { Vue, Component, Prop } from 'vue-property-decorator';
import { ContentBlock as IContentBlock } from '@ultimaker/ultimaker.com-model-definitions/dist/molecules/blocks/ContentBlock';

@Component({
    name: 'ContentBlock',
    template: require('./content-block.html'),
})

export default class CtaBlock extends Vue implements IContentBlock {
    @Prop({ type: String, required: true }) title!: IContentBlock['title'];
    @Prop({ type: String, required: true }) description!: IContentBlock['description'];
    @Prop({ type: String }) image?: IContentBlock['image'];
    @Prop({ type: String }) cta?: IContentBlock['cta'];
}
