import {text, array, files} from '@storybook/addon-knobs';
import data from './ubr.stories.json';
import {deprecatedImages} from '../../helpers/images';
import TextUtils from '../../../js/utils/text-utils';

export default () => ({
    ubr: {
        title: text('UBR - title', data.title),
        description: text('UBR - description', data.description),
        reasons: array('UBR - reasons', data.reasons.map(reason => TextUtils.htmlDecode(reason))),
        image: deprecatedImages('UBR - image', data.image)
    }
});
