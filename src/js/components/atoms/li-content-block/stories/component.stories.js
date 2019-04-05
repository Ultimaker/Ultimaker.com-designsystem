import {storiesOf} from '@storybook/vue';

storiesOf('Atoms|list items', module)
    .add('li-content-block',
        () => {
            return {
                data: () => {
                    return {
                        data: require('src/data/li-content-block')
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
