import { Vue, Component, Prop, Watch } from 'vue-property-decorator';

import { ContentGeneral  as ContentGeneralInterface } from '@ultimaker/ultimaker.com-model-definitions/dist/molecules/contentGeneral/ContentGeneral';

@Component({
    name: 'ContentGeneral',
    template: require('./general-content.html'),
})

export default class GeneralContent extends Vue implements ContentGeneralInterface {
    @Prop({ type: String, required: true }) title!: ContentGeneralInterface['title'];
    @Prop({ type: String, required: true }) description!: ContentGeneralInterface['description'];
    @Prop({ type: Object }) ctas?: ContentGeneralInterface['ctas'] | undefined;
    @Prop({ type: Object }) image?: ContentGeneralInterface['image'] | undefined;
    @Prop({ type: Boolean, required: true }) reversed!: ContentGeneralInterface['reversed'];
}
