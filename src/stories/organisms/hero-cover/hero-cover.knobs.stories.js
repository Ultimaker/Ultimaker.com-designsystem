/* eslint-disable */
import { text, object } from '@storybook/addon-knobs';
import data from './hero-cover.stories.json';
import { contentfulImage } from '../../helpers/images';

export default () => ({
    heroCover: {
        title: text('hero-cover - title', data.title),
        description: text('hero-cover - description', data.description),
        image: {
            imageSmall: contentfulImage('hero-cover - image small', data.image.imageSmall),
            imageMedium: contentfulImage('hero-cover - image medium', data.image.imageMedium),
            imageLarge: contentfulImage('hero-cover - image large', data.image.imageLarge),
        },
        ctas: object('hero-cover - ctas', data.ctas),
    }
});
