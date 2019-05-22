import { storiesOf } from '@storybook/vue';

storiesOf('Molecules|pricing', module)
    .add(
        'Price table',
        () => ({
            template: require('./price-table.stories.html'),
        }),
        {
            notes: { markdown: require('./price-table.stories.md') },
        },
    );
