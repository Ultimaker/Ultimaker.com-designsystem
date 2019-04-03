import {storiesOf} from '@storybook/vue';
import data from './data.json';

storiesOf('Atoms|list items', module)
    .add('li-content-block',
        () => {
            return {
                data: () => {
                    return {
                        data: data['li-content-block']
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
