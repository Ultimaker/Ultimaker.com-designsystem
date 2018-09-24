import {storiesOf} from '@storybook/vue';
import {withKnobs} from '@storybook/addon-knobs';
import knobs from './hero-basic.knobs.stories.js';

storiesOf('organisms|hero', module)
    .addDecorator(withKnobs)
    .add('Hero basic', () => ({
        data: () =>  knobs(),
        template: require('./hero-basic.stories.html')
    }),
    {
        notes: {markdown: require('./hero-basic.stories.md')}
    });
