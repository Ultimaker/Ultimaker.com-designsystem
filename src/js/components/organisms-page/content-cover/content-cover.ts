import { Vue, Component, Prop, Watch } from 'vue-property-decorator';

import { ContentCover  as IContentCover } from '@ultimaker/ultimaker.com-model-definitions/dist/molecules/contentCover/ContentCover';

@Component({
    name: 'ContentCover',
    template: require('./content-cover.html'),
})

export default class GeneralContent extends Vue implements IContentCover {
    @Prop({ type: String, required: true }) title!: IContentCover['title'];
    @Prop({ type: String, required: true }) description!: IContentCover['description'];
    @Prop({ type: Object }) cta?: IContentCover['cta'] | undefined;
    @Prop({ type: Object }) image?: IContentCover['image'] | undefined;
}
