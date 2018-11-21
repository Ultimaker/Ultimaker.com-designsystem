/* eslint-disable */
import {text} from '@storybook/addon-knobs';
import data from './hero-video.stories.json';
import {responsiveImage} from '../../helpers/images';

export default () => ({
    heroVideo: {
        title: text('Hero - title', data.title),
        description: text('Hero - description', data.description),
        heroImage: responsiveImage('Hero - image', data.heroImage),
        videoId: text('Hero - youtube id', data.videoId)
    }
});
