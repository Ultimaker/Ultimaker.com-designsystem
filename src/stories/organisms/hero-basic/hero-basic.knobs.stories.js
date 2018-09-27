/* eslint-disable */
import {text, files} from '@storybook/addon-knobs';
import data from './hero-basic.stories.json';

export default () => ({
    heroBasic: {
        title: text('Hero - title', data.title),
        subtitle: text('Hero - subtitle', data.subtitle),
        description: text('Hero - description', data.description),
        image: data.image.map((image) => ({
            ...image,
            links: {
                ...image.links,
                'square_mobile': [{
                    href: files('Hero - image mobile', ['image/png', 'image/jpg', 'image/svg+xml'], image.links.square_mobile[0].href)
                }],
                'square_desktop': [{
                    href: files('Hero - image desktop', ['image/png', 'image/jpg', 'image/svg+xml'], image.links.square_desktop[0].href)
                }]
            }
        })),
        ctas: {
            button: {
                uri: text('Hero CTA-block - button url', data.ctas.button.uri),
                title: text('Hero CTA-block - button title', data.ctas.button.title)
            },
            link: {
                uri: text('Hero CTA-block - link url', data.ctas.link.uri),
                title: text('Hero CTA-block - link title', data.ctas.link.title)
            }
        }
    }
});
