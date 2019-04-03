import { Vue, Component, Prop } from 'vue-property-decorator';
import './styles.scss';
import { Overview as OverviewInterface } from '@ultimaker/ultimaker.com-model-definitions/dist/organisms/overview/Overview';

@Component({
    name: 'OverviewFilter',
    template: require('./template.html'),
})

export default class OverviewFilter extends Vue {
    @Prop({ type: String, required: true }) title!: OverviewInterface['title'];
    @Prop({ type: String, required: false }) subtitle?: OverviewInterface['subtitle'];
    @Prop({ type: Array, required: true }) sections!: OverviewInterface['sections'];
    @Prop({ type: Object, required: false }) ctas?: OverviewInterface['ctas'];
}
