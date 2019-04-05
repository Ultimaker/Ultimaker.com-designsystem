import {storiesOf} from '@storybook/vue';

storiesOf('organisms|overview', module)
    .add('card-product',
        () => {
            return {
                data: () => {
                    return {
                        data: require('src/data/overview-card-product')
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
