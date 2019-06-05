import image from 'components/atoms/c-image/data/examples/c-image-nylon';

export const data = {
    default: {
        title: 'Download Cura 4.0 now!',
        subtitle: 'Subtle subtitle',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam accumsan ut orci ac commodo. Sed rhoncus, urna ut venenatis cursus, nunc turpis suscipit enim, in congue dui dui quis sem.',
        items: [{
            image,
            description: 'Windows, 64 bit',
            file: 'http://speed.transip.nl/1gb.bin?win',
            title: 'Ultimaker Cura 4.0',
            name: 'download',
            selected: true,
        }, {
            image,
            description: 'Mac, 64 bit',
            file: 'http://speed.transip.nl/1gb.bin?mac',
            title: 'Ultimaker Cura 4.0',
            name: 'download',
            selected: false,
        }, {
            image,
            description: 'Linux, 64 bit',
            file: 'http://speed.transip.nl/1gb.bin?linux',
            title: 'Ultimaker Cura 4.0',
            name: 'download',
            selected: false,
        }],
        submitButton: {
            label: 'Download now',
        },
    },
};
