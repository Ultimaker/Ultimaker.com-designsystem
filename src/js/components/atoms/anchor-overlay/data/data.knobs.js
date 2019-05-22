import data from './data';
import { text } from '@storybook/addon-knobs';

export default () => ({
    title: text('title', data.title),
    url: text('url', data.url),
});
