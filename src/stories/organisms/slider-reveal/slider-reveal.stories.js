import {storiesOf} from '@storybook/vue';
import {withKnobs} from '@storybook/addon-knobs';
import knobs from './slider-reveal.knobs.stories.js';

storiesOf('organisms|slider-reveal', module)
    .addDecorator(withKnobs)
    .add('Slider reveal', () => ({
        data: () => knobs(),
        template: require('./slider-reveal.stories.html')
    }),
    {
        notes: {markdown: require('./slider-reveal.stories.md')}
    });
