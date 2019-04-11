import cardDefault from 'molecules/card-product/data/examples/card-product-default';
import cardNoImage from 'molecules/card-product/data/examples/card-product-no-image';
import cardNoProperties from 'molecules/card-product/data/examples/card-product-no-properties';
import cardNoImageNoProperties from 'molecules/card-product/data/examples/card-product-no-image-no-properties';

export default {
    listItems: {
        type: 'li-content-block',
        items: [
            cardDefault,
            cardNoImage,
            cardNoProperties,
            cardNoImageNoProperties
        ]
    }
};
