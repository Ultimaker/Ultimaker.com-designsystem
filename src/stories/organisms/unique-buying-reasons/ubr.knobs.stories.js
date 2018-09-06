import {text, object} from '@storybook/addon-knobs';
import data from './ubr.stories.json';

export default () => ({
    title: text('UBR - title', data.title),
    description: text('UBR - description', data.description),
    image: object('UBR - image', data.image),
    reasons: object('UBR - reasons', data.reasons)
});
