import {storiesOf} from '@storybook/vue';

storiesOf('Atoms|lists', module)
    .add(
        'Horizontal list',
        () => ({
            inject: ['data'],
            template: require('./horizontal-list.stories.html')
        }),
        {
            notes: {markdown: require('./horizontal-list.stories.md')}
        }
    );
