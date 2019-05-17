import { Vue, Component, Prop } from 'vue-property-decorator';
import { TableCompareProps } from './table-compare.models';
import WithRender from './table-compare.vue.html';

@WithRender
@Component({
    name: 'TableCompare',
})

export default class TableCompare extends Vue implements TableCompareProps {
    @Prop({ type: String, required: true }) title!: TableCompareProps['title'];
    @Prop({ type: String }) subtitle?: TableCompareProps['subtitle'];
    @Prop({ type: Object, required: true }) content!: TableCompareProps['content'];
    @Prop({ type: Object }) ctas?: TableCompareProps['ctas'];
}
