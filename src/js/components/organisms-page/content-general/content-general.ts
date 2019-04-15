import { Vue, Component, Prop, Watch } from 'vue-property-decorator';

import { ContentGeneral  as IContentGeneral } from '@ultimaker/ultimaker.com-model-definitions/dist/molecules/contentGeneral/ContentGeneral';

@Component({
    name: 'ContentGeneral',
    template: require('./content-general.html'),
})

export default class GeneralContent extends Vue implements IContentGeneral {
    @Prop({ type: String, required: true }) title!: IContentGeneral['title'];
    @Prop({ type: String, required: true }) description!: IContentGeneral['description'];
    @Prop({ type: Object }) cta?: IContentGeneral['cta'] | undefined;
    @Prop({ type: Object }) image?: IContentGeneral['image'] | undefined;
    @Prop({ type: Boolean, required: true }) reversed!: IContentGeneral['reversed'];
}
