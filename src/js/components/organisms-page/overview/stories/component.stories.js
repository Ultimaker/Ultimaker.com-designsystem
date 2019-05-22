import { storiesOf } from '@storybook/vue';
import cardProductData from 'organisms-page/overview/data/examples/card-product';
import businessCardData from 'organisms-page/overview/data/examples/business-cards';

storiesOf('organisms|overview', module)
    .add('Overview business card',
        () => ({
            data: () => ({
                data: businessCardData,
            }),
            template: require('./template.html'),
        }),
        {
            notes: require('./notes.md'),
        })
    .add('Overview card product',
        () => ({
            data: () => ({
                data: cardProductData,
            }),
            template: require('./template.html'),
        }),
        {
            notes: require('./notes.md'),
        });
