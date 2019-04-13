import {storiesOf} from '@storybook/vue';
import inlineLabels from 'molecules/list-unordered/data/examples/list-unordered-inline-labels';
import liItems from 'molecules/list-unordered/data/examples/list-unordered-items';

storiesOf('Molecules|lists/list-unordered', module)
    .add('li-item',
        () => {
            return {
                data: () => {
                    return {
                        data: liItems
                    };
                },
                template: require('./template.html')
            };
        },
        {
            notes: require('./notes.md')
        }
    )
    .add('list-item-inline-labels',
        () => {
            return {
                data: () => {
                    return {
                        data: inlineLabels
                    };
                },
                template: require('./template.html')
            };
        },
        {
            notes: require('./notes.md')
        }
    );
