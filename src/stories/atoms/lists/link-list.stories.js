import {storiesOf} from '@storybook/vue';
import ContentLink from 'atoms/content-link';

storiesOf('Atoms|lists', module)
    .add(
        'Link list',
        () => ({
            components: {
                ContentLink
            },
            inject: ['data'],
            template: require('./link-list.stories.html')
        }),
        {
            notes: {markdown: require('./link-list.stories.md')}
        }
    );
