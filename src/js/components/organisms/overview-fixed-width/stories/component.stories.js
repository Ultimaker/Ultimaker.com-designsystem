import {storiesOf} from '@storybook/vue';
import data from 'organisms/overview-fixed-width/data/data';

storiesOf('organisms|overview-fixed-width', module)
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
