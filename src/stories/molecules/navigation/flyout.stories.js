import {storiesOf} from '@storybook/vue';
import {withKnobs, boolean} from '@storybook/addon-knobs';
import flyoutData from './flyout.stories.json';
import Flyout from 'molecules/flyout';


storiesOf('Molecules|navigation', module)
    .addDecorator(withKnobs)
    .add(
        'Flyout',
        () => {
            const isCompact = boolean('Compact', true);

            return {
                components: {
                    Flyout
                },
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

