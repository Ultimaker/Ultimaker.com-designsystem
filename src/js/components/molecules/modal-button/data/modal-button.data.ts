import image from 'components/atoms/c-image/data/examples/c-image-nylon';

export const data = {
    default: {
        label: 'Download',
        modal: {
            type: 'ModalWizard',
            title: 'This is the wizard title',
            steps: [{
                type: 'WizardStepDownloadList',
                title: 'Download Cura 4.0 now!',
                subtitle: 'Subtle subtitle',
                items: [{
                    image,
                    description: 'Windows, 64 bit',
                    file: 'http://file.exe',
                    title: 'Ultimaker Cura 4.0',
                    name: 'download',
                    selected: true,
                }, {
                    image,
                    description: 'Mac, 64 bit',
                    file: 'http://file.dmg',
                    title: 'Ultimaker Cura 4.0',
                    name: 'download',
                    selected: false,
                }, {
                    image,
                    description: 'Linux, 64 bit',
                    file: 'http://file.zip',
                    title: 'Ultimaker Cura 4.0',
                    name: 'download',
                    selected: false,
                }],
                submitButton: {
                    label: 'Download now',
                },
            }],
        },
    },
};
