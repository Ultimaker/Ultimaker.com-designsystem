import { storiesOf } from '@storybook/vue';
import { withKnobs } from '@storybook/addon-knobs';
import knobs from './card.knobs.stories';

storiesOf('Molecules|cards', module)
    .addDecorator(withKnobs)
    .add('Card', () => ({
        props: {
            card: { default: knobs() },
        },
        template: require('./card.stories.html'),
    }),
    {
        notes: { markdown: require('./card.stories.md') },
    });
