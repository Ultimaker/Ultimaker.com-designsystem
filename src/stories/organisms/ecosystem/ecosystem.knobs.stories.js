import {select, text, object} from '@storybook/addon-knobs';
import data from './ecosystem.stories.json';

export default () => ({
    ecosystem: {
        title: text('Ecosystem - title',  data.title),
        items: object('Ecosystem - items', data.items)
    }
});
