import { Vue, Component, Prop } from 'vue-property-decorator';
import './styles.scss';

@Component({
    name: 'OverviewFilter',
    template: require('./template.html'),
})

export default class OverviewFilter extends Vue {
    @Prop({ type: Object, required: false }) list?;
    @Prop({ type: String, required: false }) title?: string;
}
