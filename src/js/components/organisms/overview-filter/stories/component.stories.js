import {storiesOf} from '@storybook/vue';
import data from './data.json';

storiesOf('organisms|overview-filter', module)
    .add('card-product',
        () => {
            return {
                data: () => data,
                template: require('./template.html')
            };
        },
        {
            notes: {
                markdown: require('./notes.md')
            }
        }
    );
