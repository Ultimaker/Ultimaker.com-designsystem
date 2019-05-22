import { storiesOf } from '@storybook/vue';
import { withKnobs } from '@storybook/addon-knobs';
import knobs from './cta-block.knobs.stories';

storiesOf('Molecules|layout/cta-block', module)
    .addDecorator(withKnobs)
    .add('cta-block', () => ({
        props: {
            ctas: { default: knobs() },
        },
        template: require('./cta-block.stories.html'),
    }),
    {
        notes: { markdown: require('./cta-block.stories.md') },
    });
