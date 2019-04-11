import data from './data';
import {text} from '@storybook/addon-knobs';
import getKnobs from 'events/click-event/data/data.knobs';

export default () => ({
    clickEvent: getKnobs(),
    title: text('title', data.title),
    url: text('url', data.url)
});
