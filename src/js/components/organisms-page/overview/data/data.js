import cardDefault from 'molecules/card-product/data/examples/card-product-default';
import cardNoImage from 'molecules/card-product/data/examples/card-product-no-image';
import cardNoProperties from 'molecules/card-product/data/examples/card-product-no-properties';
import cardNoImageNoProperties from 'molecules/card-product/data/examples/card-product-no-image-no-properties';

export default {
    type: 'overview',
    title: 'Explore the benefits of each material',
    subtitle: 'Or just get a subtitle',
    ctas: {
        type: 'cta-block',
        ctas: [
            {
                type: 'content-button',
                label: 'Call me back',
                url: 'https://ultimaker.com'
            },
            {
                type: 'content-link',
                label: 'Call me back',
                url: 'https://ultimaker.com'
            }
        ]
    },
    sections: [
        {
            type: 'list-section',
            title: 'This is a title for section',
            limit: {
                largeScreen: 6
            },
            expand: {
                label: 'Show all'
            },
            cards: [
                cardDefault,
                cardNoImage,
                cardNoProperties,
                cardNoImageNoProperties,
                cardDefault,
                cardNoImage,
                cardNoProperties,
                cardNoImageNoProperties
            ]
        }
    ]
};
