import {storiesOf} from '@storybook/vue';

storiesOf('Atoms|tables', module)
    .add(
        'responsive-table',
        () => ({
            template: require('./responsive-table.stories.html')
        }),
        {
            notes: {markdown: require('./responsive-table.stories.md')}
        }
    );
