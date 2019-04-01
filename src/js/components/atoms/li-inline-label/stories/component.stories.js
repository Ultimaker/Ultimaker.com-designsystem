import {storiesOf} from '@storybook/vue';
import data from 'atoms/li-inline-label/stories/data.json';

storiesOf('Atoms|list items', module)
    .add('li-inline-label',
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
