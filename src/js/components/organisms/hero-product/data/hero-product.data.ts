export const data = {
    default: {
        title: 'Lorem ipsum dolor sit amet',
        subtitle: 'Maecenas faucibus mollis interdum nulla vitae elit libero a pharetra augue',
        description: 'Maecenas faucibus mollis interdum. Nulla vitae elit libero, a pharetra augue. Maecenas sed diam eget risus varius blandit sit amet non magna. Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Nulla vitae elit libero, a pharetra augue.',
        image: {
            url: 'https://images.ctfassets.net/yadj1kx9rmg0/wtrHxeu3zEoEce2MokCSi/cf6f68efdcf625fdc060607df0f3baef/quwowooybuqbl6ntboz3.jpg',
            alt: 'An example image',
            quality: 65,
            radius: 0,
            imageFormat: 'png',
            resizeBehavior: 'fill',
            focusArea: 'center',
            backgroundColor: null,
            mimeType: 'image/png',
        },
        products: [
            {
                type: 'Product',
                icon: 'material',
                name: 'Pla, 750 gr',
                pricing: {
                    label: 'Price on request',
                },
            },
            {
                type: 'Product',
                icon: 'ums5',
                name: 'Ultimaker S5',
                pricing: {
                    label: 'Price on request',
                },
            },
        ],
        linkList: [
            {
                type: 'ContentLink',
                label: 'Content link',
                url: '/en/link',
                icon: 'info',
            },
            {
                type: 'ContentLink',
                label: 'Content link',
                url: '/en/link',
                icon: 'info',
            },
        ],
        ctas: {
            type: 'Ctas',
            ctas: [
                {
                    type: 'ContentButton',
                    label: 'Request a quote',
                    url: '/en/quote',
                },
                {
                    type: 'ContentLink',
                    label: 'Content link',
                    url: '/en/link',
                },
            ],
        },
    },
};

export default type => data[type];
