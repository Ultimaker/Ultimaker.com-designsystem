import {storiesOf} from '@storybook/vue';
import data from './data.json';

storiesOf('organisms|overview', module)
    .add('card-product',
        () => {
            return {
                data: () => {
                    return {
                        data: data['card-product']
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
