import cardDefault from 'molecules/card-product/data/examples/card-product-default';
import cardNoImage from 'molecules/card-product/data/examples/card-product-no-image';
import cardNoProperties from 'molecules/card-product/data/examples/card-product-no-properties';
import cardNoImageNoProperties from 'molecules/card-product/data/examples/card-product-no-image-no-properties';

export default {
    listItems: {
        type: 'LiItem',
        items: [
            {
                item: {
                    item: cardDefault,
                    type: cardDefault.type
                }
            },
            {
                item: {
                    item: cardNoImage,
                    type: cardNoImage.type
                }
            },
            {
                item: {
                    item: cardNoProperties,
                    type: cardNoProperties.type
                }
            },
            {
                item: {
                    item: cardNoImageNoProperties,
                    type: cardNoImageNoProperties.type
                }
            }
        ]
    }
};
