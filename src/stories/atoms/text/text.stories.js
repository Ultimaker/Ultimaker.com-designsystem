import {storiesOf} from '@storybook/vue';

storiesOf('Atoms|text', module)
    .add(
        'Inline elements',
        () => ({
            template: require('./text.inline.stories.html')
        }),
        {
            notes: {markdown: require('./text.inline.stories.md')}
        }
    );
