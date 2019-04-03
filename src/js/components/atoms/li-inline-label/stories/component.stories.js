import {storiesOf} from '@storybook/vue';
import data from './data.json';

storiesOf('Atoms|list items', module)
    .add('li-inline-label',
        () => {
            return {
                data: () => {
                    return {
                        data: data['li-inline-label']
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
