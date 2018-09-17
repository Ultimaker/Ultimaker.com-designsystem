import {storiesOf} from '@storybook/vue';
import {withKnobs} from '@storybook/addon-knobs';
import knobs from './hero-product.knobs.stories.js';

storiesOf('organisms|hero', module)
    .addDecorator(withKnobs)
    .add('Hero product', () => ({
        data: () =>  knobs(),
        template: require('./hero-product.stories.html')
    }),
    {
        notes: {markdown: require('./hero-product.stories.md')}
    });
