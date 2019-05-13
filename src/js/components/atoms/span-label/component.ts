import { Vue, Component, Prop } from 'vue-property-decorator';
import WithRender from './template.vue.html';

@WithRender
@Component({
    name: 'SpanLabel',
})

export default class SpanLabel  extends Vue {
    @Prop({ type: String, required: true }) item!: string;
}
