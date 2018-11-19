/* eslint-disable */
import {text, select, files} from '@storybook/addon-knobs';
import data from './hero-video.stories.json';
import {iconList} from '../../helpers/icons';
import {responsiveImage} from '../../helpers/images';

export default () => ({
    heroVideo: {
        title: text('Hero - title', data.title),
        description: text('Hero - description', data.description),
        heroImage: responsiveImage('Hero-products - image', data.heroImage),
        videoId: text('Cases - youtube id', data.videoId),
        buttonIcon: select('Cases - button icon', iconList, data.buttonIcon),
        buttonLabel: text('Cases - button label', data.buttonLabel),
    }
});
