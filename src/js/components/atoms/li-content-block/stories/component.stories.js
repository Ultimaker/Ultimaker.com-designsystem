import {storiesOf} from '@storybook/vue';
import data from 'atoms/li-content-block/stories/data.json';

storiesOf('Atoms|list items', module)
    .add('li-content-block',
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
