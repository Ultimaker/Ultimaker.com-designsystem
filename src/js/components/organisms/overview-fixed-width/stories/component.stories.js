import {storiesOf} from '@storybook/vue';

storiesOf('organisms|overview-fixed-width', module)
    .add('card-product',
        () => {
            return {
                data: () => {
                    return {
                        data: require('src/data/overview-fixed-width-card-product')
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
