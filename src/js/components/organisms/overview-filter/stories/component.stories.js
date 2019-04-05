import {storiesOf} from '@storybook/vue';

storiesOf('organisms|overview-filter', module)
    .add('card-product',
        () => {
            return {
                data: () => {
                    return {
                        data: require('src/data/overview-filter-card-product')
                    };
                },
                template: require('./template.html')
            };
        },
        {
            notes: {
                markdown: require('./notes.md')
            }
        }
    );
