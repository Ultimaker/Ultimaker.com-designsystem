import data from './examples/nylon';
import {text} from '@storybook/addon-knobs';

export default () => ({
    alt: text('alt', data.object.alt),
    url: text('url', data.object.url),
    mimeType: text('mimeType', data.object.mimeType)
});
