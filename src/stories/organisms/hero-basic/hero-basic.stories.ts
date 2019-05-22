import { storiesOf } from '@storybook/vue';
import { withKnobs } from '@storybook/addon-knobs';
import knobs from './hero-basic.knobs.stories';

storiesOf('organisms|hero', module)
    .addDecorator(withKnobs)
    .add('Hero basic', () => ({
        props: {
            heroBasic: { default: knobs().heroBasic },
        },
        template: require('./hero-basic.stories.html'),
    }),
    {
        notes: { markdown: require('./hero-basic.stories.md') },
    });
