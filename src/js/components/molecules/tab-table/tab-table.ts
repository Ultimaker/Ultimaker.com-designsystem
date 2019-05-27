import { Vue, Component, Prop } from 'vue-property-decorator';
import { TabTableProps } from './tab-table.models';
import WithRender from './tab-table.vue.html';

interface TabImplementationInterface extends TabTableProps {
    id: any;
    active: boolean;
}

@WithRender
@Component({
    name: 'TabTable',
})

export class TabTable extends Vue implements TabImplementationInterface {
    @Prop({ type: String, required: true }) public id!:TabImplementationInterface['id'];
    @Prop({ type: String, required: true }) label!: TabImplementationInterface['label'];
    @Prop({ type: Array, required: true }) rows!: TabImplementationInterface['rows'];
    @Prop({ type: Boolean, required: true }) active!: TabImplementationInterface['active'];
}
