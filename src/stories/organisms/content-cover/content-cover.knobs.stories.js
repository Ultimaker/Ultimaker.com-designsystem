/* eslint-disable */
import { text, object } from '@storybook/addon-knobs';
import data from './content-cover.stories.json';
import { contentfulImage } from '../../helpers/images';

export default () => ({
    ContentCover: {
        title: text('content-cover - title', data.title),
        description: text('content-cover - description', data.description),
        image: contentfulImage('content-cover - image', data.image),
        cta: object('content-cover - ctas', data.cta),
    }
});
