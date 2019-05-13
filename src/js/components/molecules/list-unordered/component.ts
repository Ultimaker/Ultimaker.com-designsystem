import { Vue, Component, Prop } from 'vue-property-decorator';
import WithRender from './template.vue.html';

@WithRender
@Component({
    name: 'ListUnordered',
})

export default class ListUnordered extends Vue {
    @Prop({ type: Object, required: true }) listItems!: { items: [string[] | object[]], type: string };
}
