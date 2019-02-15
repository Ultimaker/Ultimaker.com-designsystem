import {storiesOf} from '@storybook/vue';
import {withKnobs, boolean} from '@storybook/addon-knobs';
import flyoutData from './flyout.stories.json';


storiesOf('Molecules|navigation', module)
    .addDecorator(withKnobs)
    .add(
        'Flyout',
        () => {
            const isCompact = boolean('Compact', true);

            return {
                data: () => ({
                    isCompact,
                    lists: flyoutData.lists
                }),
                template: require('./flyout.stories.html')
            };
        },
        {
            notes: {markdown: require('./flyout.stories.md')}
        }
    );
