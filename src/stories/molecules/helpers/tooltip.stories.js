import {storiesOf} from '@storybook/vue';
import Tooltip from 'atoms/tooltip';

storiesOf('Molecules|helpers', module)
    .add(
        'Tooltip',
        () => ({
            components: {
                Tooltip
            },
            template: require('./tooltip.stories.html')
        }),
        {
            notes: {markdown: require('./tooltip.stories.md')}
        }
    );
