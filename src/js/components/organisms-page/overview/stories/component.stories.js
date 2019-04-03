import {storiesOf} from '@storybook/vue';
import data from './data.json';

storiesOf('organisms|overview', module)
    .add('product-card',
        () => {
            return {
                data: () => {
                    return {
                        data: data['product-card']
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
