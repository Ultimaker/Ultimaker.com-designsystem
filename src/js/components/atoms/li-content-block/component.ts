import { Vue, Component, Prop } from 'vue-property-decorator';
import './styles.scss';

@Component({
    name: 'LiContentBlock',
    template: require('./template.html'),
})

export default class LiContentBlock  extends Vue {
    @Prop({ type: Object, required: true }) item!: { item: object, type: string };
}
