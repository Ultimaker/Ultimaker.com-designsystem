import {text, object} from '@storybook/addon-knobs';
import data from './hero-products-application.stories.json';

export default () => ({
    heroProductsApplication: {
        title: text('Hero-products - title', data.title),
        subtitle: text('Hero-products - subtitle', data.subtitle),
        description: text('Hero-products - description', data.description),
        heroImage: object('Hero-products - image', data.heroImage),
        productImage: object('Hero-products - product image', data.productImage),
        uspIcons: object('Hero-products - icons', data.uspIcons),
        ctaLink: object('Hero-products - cta', data.ctaLink),
        links: object('Hero-products - links', data.links)
    }
});
