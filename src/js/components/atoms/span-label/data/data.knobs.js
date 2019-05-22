import data from './data';
import { text } from '@storybook/addon-knobs';

export default () => ({
    item: text('item', data.item),
});
