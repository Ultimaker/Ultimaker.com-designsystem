/** @format */

import { OverviewProps } from 'components/organisms/overview/overview.models';
import { Vue, Component, Prop } from 'vue-property-decorator';
import WithRender from './overview.vue.html';

@WithRender
@Component({
    name: 'Overview',
})

export class Overview extends Vue implements OverviewProps {
    @Prop({ type: Object, required: false }) ctas?: OverviewProps['ctas'];
    @Prop({ type: Array, required: true }) sections!: OverviewProps['sections'];
    @Prop({ type: String, required: false }) subtitle?: OverviewProps['subtitle'];
    @Prop({ type: String, required: true }) title!: OverviewProps['title'];
}
