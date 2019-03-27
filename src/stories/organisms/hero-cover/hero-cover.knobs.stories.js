/* eslint-disable */
import { text, object } from '@storybook/addon-knobs';
import data from './hero-cover.stories.json';
import { contentfulImage } from '../../helpers/images';

export default () => ({
    heroCover: {
        title: text('hero-cover - title', data.title),
        description: text('hero-cover - description', data.description),
        imageSmall: contentfulImage('hero-cover - image small', data.imageSmall),
        imageMedium: contentfulImage('hero-cover - image medium', data.imageMedium),
        imageLarge: contentfulImage('hero-cover - image large', data.imageLarge),
        ctas: object('hero-cover - ctas', data.ctas),
    }
});
