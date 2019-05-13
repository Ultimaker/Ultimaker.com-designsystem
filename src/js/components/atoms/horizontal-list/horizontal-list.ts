import { Vue, Component, Prop } from 'vue-property-decorator';
import { IHorizontalListProps, IHorizontalListItem } from './horizontal-list.models';
import WithRender from './horizontal-list.vue.html';

@WithRender
@Component({
    name: 'horizontal-list',
})

export default class HorizontalList  extends Vue implements IHorizontalListProps {
    @Prop({ type: String }) styleModifier!: string;
    @Prop({ type: String, required: true }) label!: string;
    @Prop({ type: Array, required: true }) listItems!: IHorizontalListItem[];
}
