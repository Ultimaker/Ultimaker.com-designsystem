import {storiesOf} from '@storybook/vue';

storiesOf('Molecules|helpers', module)
    .add(
        'Tooltip',
        () => ({
            template: require('./tooltip.stories.html')
        }),
        {
            notes: {markdown: require('./tooltip.stories.md')}
        }
    );
