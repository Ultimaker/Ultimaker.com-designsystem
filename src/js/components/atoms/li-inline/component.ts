import { Vue, Component, Prop } from 'vue-property-decorator';
import './styles.scss';

@Component({
    name: 'LiInline',
    template: require('./template.html'),
})

export default class LiInline  extends Vue {
    @Prop({ type: String, required: true }) item!: string;
    @Prop({ type: String, required: true }) type!: string;
}
