import {storiesOf} from '@storybook/vue';
import data from 'src/data/anchor-overlay';

storiesOf('Atoms|anchors', module)
    .add('anchor-overlay',
        () => {
            return {
                data: () => {
                    return {
                        data
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
