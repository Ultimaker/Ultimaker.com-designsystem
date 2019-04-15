import {storiesOf} from '@storybook/vue';
import cardDefault from 'molecules/card-product/data/examples/card-product-nylon';
import cardNoImage from 'molecules/card-product/data/examples/card-product-no-image';
import cardNoProperties from 'molecules/card-product/data/examples/card-product-no-properties';
import cardNoImageNoProperties from 'molecules/card-product/data/examples/card-product-no-image-no-properties';

storiesOf('Molecules|cards/card-product', module)
    .add('default',
        () => {
            return {
                data: () => {
                    return {
                        data: cardDefault
                    };
                },
                template: require('./template.html')
            };
        },
        {
            notes: require('./notes.md')
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
                template: require('./template.html')
            };
        },
        {
            notes: require('./notes.md')
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
                template: require('./template.html')
            };
        },
        {
            notes: require('./notes.md')
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
                template: require('./template.html')
            };
        },
        {
            notes: require('./notes.md')
        }
    );
