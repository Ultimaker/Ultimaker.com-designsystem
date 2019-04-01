import {storiesOf} from '@storybook/vue';
import data from 'atoms/anchor-overlay/stories/data.json';

storiesOf('Atoms|anchors', module)
    .add('anchor-overlay',
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
