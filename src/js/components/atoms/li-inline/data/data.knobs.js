import data from 'atoms/span-label/data/data';
import {text} from '@storybook/addon-knobs';

export default () => ({
    item: text('item', data.item),
    type: text('type', data.type)
});
