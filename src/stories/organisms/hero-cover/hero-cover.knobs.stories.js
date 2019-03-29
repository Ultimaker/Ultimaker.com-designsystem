/* eslint-disable */
import { text, object } from '@storybook/addon-knobs';
import data from './hero-cover.stories.json';
import { contentfulImage } from '../../helpers/images';

export default () => ({
    heroCover: {
        title: text('hero-cover - title', data.title),
        description: text('hero-cover - description', data.description),
        image: contentfulImage('hero-cover - image', data.image),
        ctas: object('hero-cover - ctas', data.ctas),
    }
});
