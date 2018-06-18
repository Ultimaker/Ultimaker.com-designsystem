import {storiesOf} from '@storybook/vue';
import {withKnobs, boolean} from '@storybook/addon-knobs';
import flyoutData from './flyout.stories.json';


storiesOf('Molecules|navigation')
    .addDecorator(withKnobs)
    .add(
        'Flyout',
        () => {
            const isCompact = boolean('Compact', true);

            return {
                data: () => ({
                    isCompact,
                    sections: flyoutData.sections
                }),
                template: require('./flyout.stories.html')
            };
        },
        {
            notes: {markdown: require('./flyout.stories.md')}
        }
    );

