import { storiesOf } from '@storybook/vue';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import knobs from './flyout.knobs.stories';

storiesOf('Molecules|navigation', module)
    .addDecorator(withKnobs)
    .add('Flyout', () => ({
        props: {
            flyout: { default: knobs().flyout },
        },
        template: require('./flyout.stories.html'),
    }),
    {
        notes: { markdown: require('./flyout.stories.md') },
    });
