import cardDefault from 'molecules/card-product/data/examples/card-product-default';
import cardNoImage from 'molecules/card-product/data/examples/card-product-no-image';
import cardNoProperties from 'molecules/card-product/data/examples/card-product-no-properties';
import cardNoImageNoProperties from 'molecules/card-product/data/examples/card-product-no-image-no-properties';

export default {
    type: 'overview',
    title: 'Explore the benefits of each material',
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
