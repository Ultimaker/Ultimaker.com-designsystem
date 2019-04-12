import data from './examples/nylon';
import {text} from '@storybook/addon-knobs';

export default () => ({
    alt: text('alt', data.alt),
    url: text('url', data.url),
    mimeType: text('mimeType', data.mimeType)
});
