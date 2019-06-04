import { Vue, Component, Prop } from 'vue-property-decorator';
import { WizardStepDownloadListProps } from './wizard-step-download-list.models';
import WithRender from './wizard-step-download-list.vue.html';

@WithRender
@Component({
    name: 'WizardStepDownloadList',
})

export class WizardStepDownloadList extends Vue implements WizardStepDownloadListProps {
    @Prop({ type: String, required: true }) title!: WizardStepDownloadListProps['title'];
    @Prop({ type: String, required: false }) subtitle?: WizardStepDownloadListProps['subtitle'];
    @Prop({ type: Array, required: true }) items!: WizardStepDownloadListProps['items'];
    @Prop({ type: Object, required: true }) submitButton!: WizardStepDownloadListProps['submitButton'];

    selected: number = 0;
    name: string = 'download';

    get selectedItem() {
        return this.selected;
    }

    get file() {
        return this.items[this.selectedItem].file;
    }

    setSelectedItem(index) {
        this.selected = index;
    }

    handleSubmit(e) {
    }
}
