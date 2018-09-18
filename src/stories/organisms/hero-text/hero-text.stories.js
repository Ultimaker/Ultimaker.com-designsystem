import {storiesOf} from '@storybook/vue';
import {withKnobs} from '@storybook/addon-knobs';
import knobs from './hero-text.knobs.stories';

storiesOf('organisms|hero', module)
    .addDecorator(withKnobs)
    .add('Hero text', () => ({
        data: () => knobs(),
        template: require('./hero-text.stories.html')
    }),{
        notes: {markdown: require('./hero-text.stories.md')}
    });

