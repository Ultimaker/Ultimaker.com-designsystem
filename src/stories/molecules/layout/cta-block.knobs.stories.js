import {text, select} from '@storybook/addon-knobs';
import data from './cta-block.stories.json';
import {unique, keyValueMap} from '../../helpers/functions';

const availableTypes = unique(data.ctas.map(({type}) => type));
const options = keyValueMap(availableTypes);

export default () => ({
    ctas: data.ctas.map(({type, label, url}, index) => ({
        type: select(`CTA-block ${index+1} - type:`, options, type),
        label: text(`CTA-block ${index+1} - label`, label),
        url
    }))
});
