import { Vue, Component, Prop } from 'vue-property-decorator';

import { OverviewUBR as OverviewUBRInterface } from '@ultimaker/ultimaker.com-model-definitions/dist/organisms/overview/OverviewUBR';

@Component({
    name: 'OverviewUBR',
    template: require('./overview-ubr.html'),
})

export default class OverviewUBR extends Vue implements OverviewUBRInterface {
    @Prop({ type: String, required: true }) title!: OverviewUBRInterface['title'];
    @Prop({ type: String, required: false }) subtitle?: OverviewUBRInterface['subtitle'];
    @Prop({ type: Array, required: true }) items!: OverviewUBRInterface['items'];
    @Prop({ type: Object, required: false }) ctas?: OverviewUBRInterface['ctas'];
}
