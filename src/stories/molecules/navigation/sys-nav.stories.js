import { storiesOf } from '@storybook/vue';

storiesOf('Molecules|navigation', module)
    .add(
        'System navigation',
        () => ({
            template: require('./sys-nav.stories.html'),
        }),
        {
            notes: { markdown: require('./sys-nav.stories.md') },
        },
    );
