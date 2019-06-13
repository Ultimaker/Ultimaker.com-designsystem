import { Vue, Component, Prop } from 'vue-property-decorator';
import { ModalButtonProps } from './modal-button.models';
import WithRender from './modal-button.vue.html';

@WithRender
@Component({
    name: 'ModalButton',
})

export class ModalButton extends Vue implements ModalButtonProps {
    @Prop({ type: Object, required: false }) clickEvent?: ModalButtonProps['clickEvent'];
    @Prop({ type: String, required: true }) label!: ModalButtonProps['label'];
    @Prop({ type: Object, required: true }) modal!: ModalButtonProps['modal'];

    modalVisible: boolean = false;

    toggleModalVisible(): void {
        this.modalVisible = !this.modalVisible;
    }

    triggerClick(): void {
        this.toggleModalVisible();
    }
}
