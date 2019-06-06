import { Vue, Component } from 'vue-property-decorator';
import { WizardStepConfirmationProps } from './wizard-step-confirmation.models';
import WithRender from './wizard-step-confirmation.vue.html';

@WithRender
@Component({
    name: 'WizardStepConfirmation',
})

export default class WizardStepConfirmation extends Vue implements WizardStepConfirmationProps {}
