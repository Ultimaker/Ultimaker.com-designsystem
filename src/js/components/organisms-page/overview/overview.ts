import { Vue, Component, Prop } from 'vue-property-decorator';
import { TweenLite, Power3 } from 'gsap';

import { Overview as OverviewInterface } from '@ultimaker/ultimaker.com-model-definitions/dist/organisms/overview/Overview';
import WithRender from './overview.vue.html';

@WithRender
@Component({
    name: 'overview',
})

export default class Overview extends Vue implements OverviewInterface {
    @Prop({ type: String, required: true }) title!: OverviewInterface['title'];
    @Prop({ type: String, required: false }) subtitle?: OverviewInterface['subtitle'];
    @Prop({ type: Array, required: true }) sections!: OverviewInterface['sections'];
    @Prop({ type: Object, required: false }) ctas?: OverviewInterface['ctas'];
}
