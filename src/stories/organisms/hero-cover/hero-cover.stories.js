import {storiesOf} from '@storybook/vue';
import {withKnobs} from '@storybook/addon-knobs';
import knobs from './hero-cover.knobs.stories.js';

storiesOf('organisms|hero', module)
    .addDecorator(withKnobs)
    .add('Hero cover', () => ({
        data: () =>  knobs(),
        template: require('./hero-cover.stories.html')
    }),
    {
        notes: {markdown: require('./hero-cover.stories.md')}
    });
