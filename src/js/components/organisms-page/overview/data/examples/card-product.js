import cardNylon from 'molecules/cards/card-product/data/examples/card-product-nylon';
import cardToughPla from 'molecules/cards/card-product/data/examples/card-product-tough-pla';
import cardNoImage from 'molecules/cards/card-product/data/examples/card-product-no-image';
import cardNoProperties from 'molecules/cards/card-product/data/examples/card-product-no-properties';
import cardNoImageNoProperties from 'molecules/cards/card-product/data/examples/card-product-no-image-no-properties';

export default {
    type: 'overview',
    title: 'Explore the benefits of each material',
    subtitle: 'Or just get a subtitle',
    ctas: {
        type: 'CtaBlock',
        ctas: [
            {
                type: 'ContentButton',
                label: 'Call me back',
                url: 'https://ultimaker.com'
            },
            {
                type: 'ContentButton',
                label: 'Call me back',
                url: 'https://ultimaker.com'
            }
        ]
    },
    sections: [
        {
            type: 'list-section',
            limit: {
                largeScreen: 3,
                smallScreen: 3
            },
            expand: {
                label: 'Show all'
            },
            cards: [
                cardNylon,
                cardToughPla,
                cardNylon,
                cardToughPla,
                cardNoImage,
                cardNoProperties,
                cardNoImageNoProperties
            ]
        }
    ]
};
