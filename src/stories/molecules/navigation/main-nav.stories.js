import {storiesOf} from '@storybook/vue';

storiesOf('Molecules|navigation', module)
    .add(
        'Main navigation',
        () => ({
            template: require('./main-nav.stories.html')
        }),
        {
            notes: {markdown: require('./main-nav.stories.md')}
        }
    );
