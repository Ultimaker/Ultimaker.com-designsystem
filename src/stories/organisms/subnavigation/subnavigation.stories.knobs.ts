import { text, select } from '@storybook/addon-knobs';
import data from './subnavigation.stories.data';

export default () => ({
    ...data,
    subnavigation: {
        ...data.subnavigation,
        items: data.subnavigation.items.map((item, i) => ({
            ...item,
            label: text(`Subnavigation label ${i}`, item.label),
            url: text(`Subnavigation url ${i}`, item.url),
        })),
    },
});
