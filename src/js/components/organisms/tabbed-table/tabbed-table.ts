import { Vue, Component, Prop } from 'vue-property-decorator';
import { TabbedTableProps } from './tabbed-table.models';
import WithRender from './tabbed-table.vue.html';

@WithRender
@Component({
    name: 'TabbedTable',
})

export class TabbedTable extends Vue implements TabbedTableProps {
    @Prop({ type: String, required: true }) title!: TabbedTableProps['title'];
    @Prop({ type: String, required: false }) subtitle?: TabbedTableProps['subtitle'];
    @Prop({ type: Array, required: true }) tabs!: TabbedTableProps['tabs'];
    @Prop({ type: Object, required: true }) ctas!: TabbedTableProps['ctas'];
}
