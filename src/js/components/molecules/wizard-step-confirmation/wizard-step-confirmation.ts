import { Vue, Component, Prop } from 'vue-property-decorator';
import { WizardStepConfirmationProps } from './wizard-step-confirmation.models';
import WithRender from './wizard-step-confirmation.vue.html';

@WithRender
@Component({
    name: 'WizardStepConfirmation',
})

export default class WizardStepConfirmation extends Vue implements WizardStepConfirmationProps {
    @Prop({ type: String, required: true }) title!: WizardStepConfirmationProps['title'];
    @Prop({ type: String, required: false }) subtitle?: WizardStepConfirmationProps['subtitle'];
    @Prop({ type: String, required: true }) contentTitle!: WizardStepConfirmationProps['contentTitle'];
    @Prop({ type: String, required: true }) content!: WizardStepConfirmationProps['content'];
    @Prop({ type: Object, required: true }) image!: WizardStepConfirmationProps['image'];
    @Prop({ type: Object, required: false }) ctas?: WizardStepConfirmationProps['ctas'];
}
