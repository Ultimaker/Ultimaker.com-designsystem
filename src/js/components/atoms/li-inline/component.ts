import { Vue, Component, Prop } from 'vue-property-decorator';
import WithRender from './template.vue.html';

@WithRender
@Component({
    name: 'LiInline',
})

export default class LiInline extends Vue {
    @Prop({ type: [String, Object], required: true }) item!: string | { item: string, type: string };
}
