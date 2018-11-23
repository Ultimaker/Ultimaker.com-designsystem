import {storiesOf} from '@storybook/vue';
import {withKnobs} from '@storybook/addon-knobs';
import knobs from './hero-video.knobs.stories.js';

storiesOf('organisms|hero', module)
    .addDecorator(withKnobs)
    .add('Hero video', () => ({
        data: () =>  knobs(),
        template: require('./hero-video.stories.html')
    }),
    {
        notes: {markdown: require('./hero-video.stories.md')}
    });
