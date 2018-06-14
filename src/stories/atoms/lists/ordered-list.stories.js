import {storiesOf} from '@storybook/vue';

storiesOf('Atoms|lists', module)
    .add(
        'Ordered list',
        () => ({
            inject: ['data'],
            template: require('./ordered-list.stories.html')
        }),
        {
            notes: {markdown: require('./ordered-list.stories.md')}
        }
    );
