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
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam accumsan ut orci ac commodo. Sed rhoncus, urna ut venenatis cursus, nunc turpis suscipit enim, in congue dui dui quis sem.',
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
                    file: 'https://download-installer.cdn.mozilla.net/pub/firefox/releases/67.0.1/mac/en-US/Firefox%2067.0.1.dmg',
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
