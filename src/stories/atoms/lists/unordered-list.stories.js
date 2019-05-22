import { storiesOf } from '@storybook/vue';

storiesOf('Atoms|lists', module)
    .add(
        'Unordered list',
        () => ({
            inject: ['data'],
            template: require('./unordered-list.stories.html'),
        }),
        {
            notes: { markdown: require('./unordered-list.stories.md') },
        },
    );
