import {storiesOf} from '@storybook/vue';

storiesOf('Molecules|tabs', module)
    .add(
        'Tabs',
        () => ({
            template: require('./tabs.stories.html')
        }),
        {
            notes: {markdown: require('./tabs.stories.md')}
        }
    );
