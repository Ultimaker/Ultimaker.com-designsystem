/* eslint-disable */
import {text, files} from '@storybook/addon-knobs';
import data from './hero-basic.data';

export default () => ({
    heroBasic: {
        title: text('Hero - title', data.title),
        subtitle: text('Hero - subtitle', data.subtitle),
        description: text('Hero - description', data.description),
        image: {
            imageSrc :text('Hero - image', data.image.imageSrc),
        },
        ctas: data.ctas.map((cta, i) => ({
            label: text(`Hero CTA-block title ${i+1}`, cta.label),
            url: text(`Hero CTA-block url ${i+1}`, cta.url)
        })),
        ... data
    }
});
