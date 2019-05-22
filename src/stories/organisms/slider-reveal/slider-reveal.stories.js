import { storiesOf } from '@storybook/vue';
import { withKnobs } from '@storybook/addon-knobs';
import knobs from './slider-reveal.knobs.stories';

storiesOf('organisms|slider-reveal', module)
    .addDecorator(withKnobs)
    .add('Slider reveal', () => ({
        props: {
            slider: { default: knobs().slider },
        },
        template: require('./slider-reveal.stories.html'),
    }),
    {
        notes: { markdown: require('./slider-reveal.stories.md') },
    });
