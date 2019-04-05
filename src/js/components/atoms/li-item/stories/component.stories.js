import {storiesOf} from '@storybook/vue';

storiesOf('Atoms|list items', module)
    .add('li-item',
        () => {
            return {
                data: () => {
                    return {
                        data: require('src/data/li-item')
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
