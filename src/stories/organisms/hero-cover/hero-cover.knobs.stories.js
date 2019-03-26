/* eslint-disable */
import {text} from '@storybook/addon-knobs';
import data from './hero-cover.stories.json';
import {responsiveImage} from '../../helpers/images';

export default () => ({
    heroCover: {
        title: text('hero-cover - title', data.title),
        description: text('hero-cover - description', data.description),
        heroImage: responsiveImage('hero-cover - image', data.heroImage),
        videoId: text('hero-cover - youtube id', data.videoId)
    }
});
