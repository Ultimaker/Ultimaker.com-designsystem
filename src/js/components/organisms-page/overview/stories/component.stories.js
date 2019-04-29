import {storiesOf} from '@storybook/vue';
import cardProductData from 'organisms-page/overview/data/examples/card-product';
import businessCardData from 'organisms-page/overview/data/examples/business-cards';

storiesOf('organisms|overview', module)
    .add('Overview business card',
        () => {
            return {
                data: () => {
                    return {
                        data: businessCardData
                    };
                },
                template: require('./template.html')
            };
        },
        {
            notes: require('./notes.md')
        }
    )
    .add('Overview card product',
        () => {
            return {
                data: () => {
                    return {
                        data: cardProductData
                    };
                },
                template: require('./template.html')
            };
        },
        {
            notes: require('./notes.md')
        }
    );
