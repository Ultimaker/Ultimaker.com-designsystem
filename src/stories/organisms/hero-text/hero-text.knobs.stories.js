import {array, text} from '@storybook/addon-knobs';
import data from './hero-text.stories.json';

export default () => ({
    heroText: {
        title: text('Hero-text - title', data.title),
        content: array('Hero-text - content', data.content)
    }
});
