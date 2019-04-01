import {storiesOf} from '@storybook/vue';
import data from 'molecules/list-unordered/stories/data.json';

storiesOf('Molecules|layout/lists/lists-unordered', module)
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
