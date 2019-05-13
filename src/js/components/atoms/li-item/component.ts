import { Vue, Component, Prop } from 'vue-property-decorator';
import WithRender from './template.vue.html';

@WithRender
@Component({
    name: 'LiItem',
})

export default class LiItem extends Vue {
    @Prop({ type: [String, Object], required: true }) item!: string | { item: string, type: string };
}
