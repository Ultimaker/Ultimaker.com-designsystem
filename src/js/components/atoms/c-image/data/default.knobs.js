import data from './examples/default';
import {number, text} from '@storybook/addon-knobs';

export default () => ({
    alt: text('alt', data.alt),
    url: text('url', data.url),
    quality: number('quality', data.quality),
    radius: number('radius', data.radius),
    imageFormat: text('imageFormat', data.imageFormat),
    mimeType: text('mimeType', data.mimeType),
    resizeBehavior: text('resizeBehaviour', data.resizeBehavior),
    focusArea: text('focusArea', data.focusArea),
    backgroundColor: text('backgroundColor', data.backgroundColor)
});
