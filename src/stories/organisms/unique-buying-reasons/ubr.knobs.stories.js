import {text, array, files} from '@storybook/addon-knobs';
import data from './ubr.stories.json';
import {deprecatedImages} from '../../helpers/images';

export default () => ({
    ubr: {
        title: text('UBR - title', data.title),
        description: text('UBR - description', data.description),
        reasons: array('UBR - reasons', data.reasons),
        image: deprecatedImages('UBR - image', data.image)
    }
});
