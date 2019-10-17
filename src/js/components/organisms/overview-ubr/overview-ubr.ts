import { Vue, Component, Prop } from 'vue-property-decorator';

import { OverviewUbrProps } from './overview-ubr.models';
import WithRender from './overview-ubr.vue.html';

@WithRender
@Component({
    name: 'OverviewUBR',
})

export class OverviewUBR extends Vue implements OverviewUbrProps {
    @Prop({ type: String, required: true }) title!: OverviewUbrProps['title'];
    @Prop({ type: String, required: false }) subtitle?: OverviewUbrProps['subtitle'];
    @Prop({ type: Array, required: true }) items!: OverviewUbrProps['items'];
    @Prop({ type: Object, required: false }) ctas?: OverviewUbrProps['ctas'];
}
