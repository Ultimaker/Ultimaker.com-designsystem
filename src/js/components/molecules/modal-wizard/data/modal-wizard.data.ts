import { data as wizardStepDownloadList } from 'components/molecules/wizard-step-download-list/data/wizard-step-download-list.data';
import { data as wizardStepConfirmation } from 'components/molecules/wizard-step-confirmation/data/wizard-step-confirmation.data';

export const data = {
    default: {
        type: 'ModalWizard',
        title: 'This is the wizard title',
        steps: [
            wizardStepDownloadList.default,
            wizardStepConfirmation.default,
        ],
    },
};
