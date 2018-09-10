import {text, object} from '@storybook/addon-knobs';
import data from './explore.stories.json';

export default () => ({
    explore: {
        title: text('Explore - title', data.title),
        items: object('Explore - items', data.items)
    }
});
