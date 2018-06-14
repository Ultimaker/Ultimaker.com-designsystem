import {storiesOf} from '@storybook/vue';

storiesOf('Atoms|lists', module)
    .add(
        'Definition list',
        () => ({
            inject: ['data'],
            template: require('./definition-list.stories.html')
        }),
        {
            notes: {markdown: require('./definition-list.stories.md')}
        }
    );
