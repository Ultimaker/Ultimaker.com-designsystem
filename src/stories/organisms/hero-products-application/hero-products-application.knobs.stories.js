import {select, text} from '@storybook/addon-knobs';
import data from './hero-products-application.stories.json';
import {responsiveImage} from '../../helpers/images';
import {iconList} from '../../helpers/icons';

export default () => ({
    heroProductsApplication: {
        title: text('Hero-products - title', data.title),
        subtitle: text('Hero-products - subtitle', data.subtitle),
        description: text('Hero-products - description', data.description),
        heroImage: responsiveImage('Hero-products - image', data.heroImage),
        productImage: responsiveImage('Hero-products - product image', data.productImage),
        uspIcons: data.uspIcons.map((usp, i) => ({
            iconName: select(`Hero-products - usp ${i+1} icon`, iconList, usp.iconName),
            text: text(`Hero-products - usp icon ${i+1} text`, usp.text)
        })),
        ctaLink: {
            ... data.ctaLink,
            text: text('Hero-products - cta', data.ctaLink.text)
        },
        links: data.links.map((link, i) => ({
            ...link,
            icon: select(`Hero-products - link ${i+1} icon`, iconList, link.icon),
            text: text(`Hero-products - link ${i+1} text`, link.text)
        }))
    }
});
