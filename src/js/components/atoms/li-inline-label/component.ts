import { Vue, Component, Prop } from 'vue-property-decorator';
import './styles.scss';

@Component({
    name: 'LiInlineLabel',
    template: require('./template.html'),
})

export default class LiInlineLabel  extends Vue {
    @Prop({ type: String, required: true }) item!: string;
}
