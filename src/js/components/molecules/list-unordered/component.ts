import { Vue, Component, Prop } from 'vue-property-decorator';
import './styles.scss';

@Component({
    name: 'ListUnordered',
    template: require('./template.html'),
})

export default class ListUnordered  extends Vue {
    @Prop({ type: Object, required: true }) list!: Object;
}
