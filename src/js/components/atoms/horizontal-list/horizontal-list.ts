import { Vue, Component, Prop } from 'vue-property-decorator';
import { IHorizontalListProps, IHorizontalListItem } from './horizontal-list.models';

@Component({
    name: 'horizontal-list',
    template: require('./horizontal-list.vue.html'),
})

export default class HorizontalList  extends Vue implements IHorizontalListProps {
    @Prop({ type: String }) styleModifier!: string;
    @Prop({ type: String, required: true }) label!: string;
    @Prop({ type: Array, required: true }) listItems!: IHorizontalListItem[];
}
