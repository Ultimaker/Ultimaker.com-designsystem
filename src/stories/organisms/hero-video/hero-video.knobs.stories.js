/* eslint-disable */
import {text} from '@storybook/addon-knobs';
import data from './hero-video.stories.json';
import {responsiveImage} from '../../helpers/images';

export default () => ({
    heroVideo: {
        title: text('Hero-video - title', data.title),
        description: text('Hero-video - description', data.description),
        heroImage: responsiveImage('Hero-video - image', data.heroImage),
        videoId: text('Hero-video - youtube id', data.videoId)
    }
});
