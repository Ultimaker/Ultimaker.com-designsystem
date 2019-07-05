/* eslint-disable */
import {text, files} from '@storybook/addon-knobs';
import data from './hero-basic.data';
import ctaBlockKnobs from '../../molecules/layout/cta-block.knobs.stories';

export default () => ({
    heroBasic: {
        title: text('Hero - title', data.title),
        subtitle: text('Hero - subtitle', data.subtitle),
        description: text('Hero - description', data.description),
        image: {
            url: text('Hero - image', data.image.url),
            alt: text('Hero - image', data.image.alt),
            mimeType: text('Hero - image', data.image.mimeType)
        },
        ctas: ctaBlockKnobs(),
    },
});
