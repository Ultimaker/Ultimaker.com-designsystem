/* eslint-disable */
import {text} from '@storybook/addon-knobs';
import data from './hero-background.stories.json';
import {responsiveImage} from '../../helpers/images';

export default () => ({
    heroBackground: {
        title: text('hero-background - title', data.title),
        description: text('hero-background - description', data.description),
        heroImage: responsiveImage('hero-background - image', data.heroImage),
        videoId: text('hero-background - youtube id', data.videoId)
    }
});
