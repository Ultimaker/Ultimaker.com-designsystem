import { Vue, Component, Prop } from 'vue-property-decorator';

import { TabbedContent as TabbedContentInterface } from '@ultimaker/ultimaker.com-model-definitions/dist/organisms/tabbedContent/TabbedContent';
import WithRender from './tabbed-content.vue.html';

@WithRender
@Component({
    name: 'TabbedContent',
})

export default class TabbedContent extends Vue implements TabbedContentInterface {
    @Prop({ type: String, required: true }) title!: TabbedContentInterface['title'];
    @Prop({ type: Array, required: true }) tabs!: TabbedContentInterface['tabs'];
    @Prop({ type: Object }) ctas?: TabbedContentInterface['ctas'] | undefined;
    @Prop({ type: String }) subtitle?: TabbedContentInterface['subtitle'] | undefined;
    @Prop({ type: Boolean, required: false, default: false }) sequenced?: TabbedContentInterface['sequenced'];
}
