import data from './data';
import {text} from '@storybook/addon-knobs';
import clickEvent from 'atoms/click-event/data/data';

export default () => ({
    clickEvent,
    title: text('title', data.title),
    url: text('url', data.url)
});
