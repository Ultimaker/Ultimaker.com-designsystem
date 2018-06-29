import {storiesOf} from '@storybook/vue';

storiesOf('Atoms|lists', module)
    .add(
        'Link list',
        () => ({
            inject: ['data'],
            template: require('./link-list.stories.html')
        }),
        {
            notes: {markdown: require('./link-list.stories.md')}
        }
    );
