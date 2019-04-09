import { Vue, Component, Prop } from 'vue-property-decorator';
import './styles.scss';

@Component({
    name: 'SpanLabel',
    template: require('./template.html'),
})

export default class SpanLabel  extends Vue {
    @Prop({ type: String, required: true }) item!: string;
}
