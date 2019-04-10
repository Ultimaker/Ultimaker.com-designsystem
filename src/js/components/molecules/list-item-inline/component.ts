import { Vue, Component, Prop } from 'vue-property-decorator';
import './styles.scss';

@Component({
    name: 'ListItemInline',
    template: require('./template.html'),
})

export default class ListItemInline  extends Vue {
    @Prop({ type: String, required: true }) item!: string;
    @Prop({ type: String, required: true }) type!: string;
}
