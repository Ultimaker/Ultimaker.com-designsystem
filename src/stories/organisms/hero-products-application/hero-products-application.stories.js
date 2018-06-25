import {storiesOf} from '@storybook/vue';
import {withKnobs, text, object} from '@storybook/addon-knobs';
import HeroProductsApplication from 'organisms-page/hero-products-application';
import data from './hero-products-application.stories.json';

storiesOf('organisms|hero', module)
    .addDecorator(withKnobs)
    .add('Hero products application', () => {
        return {
            components: {
                HeroProductsApplication
            },
            data: () => ({
                heroProductsApplication: data
            }),
            template: require('./hero-products-application.stories.html')
        };
    },
    {
        notes: {markdown: require('./hero-products-application.stories.md')}
    });
