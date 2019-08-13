import { Vue, Component, Prop } from 'vue-property-decorator';

import { TabbedContentProps } from './tabbed-content.models';
import WithRender from './tabbed-content.vue.html';

@WithRender
@Component({
    name: 'TabbedContent',
})

export class TabbedContent extends Vue implements TabbedContentProps {
    @Prop({ type: String, required: true }) title!: TabbedContentProps['title'];
    @Prop({ type: Array, required: true }) tabs!: TabbedContentProps['tabs'];
    @Prop({ type: Object }) ctas?: TabbedContentProps['ctas'];
    @Prop({ type: String }) subtitle?: TabbedContentProps['subtitle'];
    @Prop({ type: Boolean, required: false, default: false }) sequenced?: TabbedContentProps['sequenced'];
}
