import { Vue, Component, Prop } from 'vue-property-decorator';
import { TabTableRowProps } from './tab-table-row.models';
import WithRender from './tab-table-row.vue.html';

@WithRender
@Component({
    name: 'TabTableRow',
})

export class TabTableRow extends Vue implements TabTableRowProps {
    @Prop({ type: String, required: true }) label!: TabTableRowProps['label'];
    @Prop({ type: String, required: false }) value?: TabTableRowProps['value'];
    @Prop({ type: Array, required: false }) linkList?: TabTableRowProps['linkList'];
    @Prop({ type: Object, required: false }) tooltip?: TabTableRowProps['tooltip'];
}
