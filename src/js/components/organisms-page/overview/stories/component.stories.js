import {storiesOf} from '@storybook/vue';
import data from 'organisms-page/overview/data/data';

storiesOf('organisms|overview', module)
    .add('card-product',
        () => {
            return {
                data: () => {
                    return {
                        data: data
                    };
                },
                template: require('./template.html')
            };
        },
        {
            notes: require('./notes.md')
        }
    );
