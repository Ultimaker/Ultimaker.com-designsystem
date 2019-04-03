import {storiesOf} from '@storybook/vue';
import data from './data.json';

storiesOf('Atoms|list items', module)
    .add('li-item',
        () => {
            return {
                data: () => {
                    return {
                        data: data['li-item']
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
