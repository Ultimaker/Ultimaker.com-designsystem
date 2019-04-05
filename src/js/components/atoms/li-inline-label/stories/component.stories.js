import {storiesOf} from '@storybook/vue';

storiesOf('Atoms|list items', module)
    .add('li-inline-label',
        () => {
            return {
                data: () => {
                    return {
                        data: require('src/data/li-inline-label')
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
