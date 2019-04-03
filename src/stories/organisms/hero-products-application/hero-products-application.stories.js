import {storiesOf} from '@storybook/vue';
import {withKnobs} from '@storybook/addon-knobs';
import knobs from './hero-products-application.knobs.stories.js';

storiesOf('organisms|hero', module)
    .addDecorator(withKnobs)
    .add('Hero products application', () => ({
        props: {
            heroProductsApplication: {default: knobs().heroProductsApplication}
        },
        template: require('./hero-products-application.stories.html')
    }),
    {
        notes: {markdown: require('./hero-products-application.stories.md')}
    });
