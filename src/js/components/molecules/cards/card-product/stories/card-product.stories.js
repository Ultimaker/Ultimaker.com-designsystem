import {storiesOf} from '@storybook/vue';
import cardDefault from 'src/js/components/molecules/cards/card-product/data/examples/card-product-nylon';
import cardNoImage from 'src/js/components/molecules/cards/card-product/data/examples/card-product-no-image';
import cardNoProperties from 'src/js/components/molecules/cards/card-product/data/examples/card-product-no-properties';
import cardNoImageNoProperties from 'src/js/components/molecules/cards/card-product/data/examples/card-product-no-image-no-properties';

storiesOf('Molecules|cards/card-product', module)
    .add('default',
        () => {
            return {
                data: () => {
                    return {
                        data: cardDefault
                    };
                },
                template: require('./card-product.html')
            };
        },
        {
            notes: require('./card-product.md')
        }
    )
    .add('no properties',
        () => {
            return {
                data: () => {
                    return {
                        data: cardNoProperties
                    };
                },
                template: require('./card-product.html')
            };
        },
        {
            notes: require('./card-product.md')
        }
    )
    .add('no image',
        () => {
            return {
                data: () => {
                    return {
                        data: cardNoImage
                    };
                },
                template: require('./card-product.html')
            };
        },
        {
            notes: require('./card-product.md')
        }
    )
    .add('no image, no properties',
        () => {
            return {
                data: () => {
                    return {
                        data: cardNoImageNoProperties
                    };
                },
                template: require('./card-product.html')
            };
        },
        {
            notes: require('./card-product.md')
        }
    );
