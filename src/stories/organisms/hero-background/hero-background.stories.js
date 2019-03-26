import {storiesOf} from '@storybook/vue';
import {withKnobs} from '@storybook/addon-knobs';
import knobs from './hero-background.knobs.stories.js';

storiesOf('organisms|hero', module)
    .addDecorator(withKnobs)
    .add('Hero video', () => ({
        props: {
            heroBackground: {
                default: knobs().heroVideo
            }
        },
        template: require('./hero-background.stories.html')
    }),
    {
        notes: {markdown: require('./hero-background.stories.md')}
    });
