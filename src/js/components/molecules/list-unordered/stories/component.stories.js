import {storiesOf} from '@storybook/vue';

storiesOf('Molecules|layout/lists/list-unordered', module)
    .add('li-content-block',
        () => {
            return {
                data: () => {
                    return {
                        data: require('src/data/list-unordered-content-block')
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
    )
    .add('list-item-inline',
        () => {
            return {
                data: () => {
                    return {
                        data: require('src/data/list-unordered-inline-labels')
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
    )
    .add('li-item',
        () => {
            return {
                data: () => {
                    return {
                        data: require('src/data/list-unordered-items')
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
