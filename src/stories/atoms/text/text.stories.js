import {storiesOf} from '@storybook/vue';

storiesOf('Atoms|text', module)

    .add(
        'Headings',
        () => ({
            template: require('./text.headings.stories.html')
        }),
        {
            notes: {markdown: require('./text.headings.stories.md')}
        }
    )
    .add(
        'Copy',
        () => ({
            inject: ['data'],
            template: require('./text.copy.stories.html')
        }),
        {
            notes: {markdown: require('./text.copy.stories.md')}
        }
    )
    .add(
        'Inline elements',
        () => ({
            template: require('./text.inline.stories.html')
        }),
        {
            notes: {markdown: require('./text.inline.stories.md')}
        }
    );
