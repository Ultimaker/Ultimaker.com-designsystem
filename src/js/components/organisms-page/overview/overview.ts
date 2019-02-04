import { Vue, Component, Prop, Watch } from 'vue-property-decorator';
import { TweenLite, Power3 } from 'gsap';
import Defaults from 'constants/defaults';

import { Overview as OverviewInterface } from '@ultimaker/ultimaker.com-model-definitions/dist/organisms/overview/Overview';

@Component({
    name: 'overview',
    template: require('./overview.html'),
})

export default class Overview extends Vue implements OverviewInterface {
    @Prop({ type: String, required: true }) title!: OverviewInterface['title'];
    @Prop({ type: String, required: false }) subtitle?: OverviewInterface['subtitle'];
    @Prop({ type: Array, required: true }) sections!: OverviewInterface['sections'];
    @Prop({ type: Object, required: false }) ctas?: OverviewInterface['ctas'];
}
