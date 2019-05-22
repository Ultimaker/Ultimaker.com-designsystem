import { text, boolean } from '@storybook/addon-knobs';
import data from './flyout.stories.json';

export default () => ({
    flyout: {
        isCompact: boolean('Compact', false),
        items: data.flyout.items.map((item, index) => ({
            label: text(`Flyout title ${index + 1}`, item.label),
            items: item.items.map(({ label, url }, i) => ({
                label: text(`Flyout items ${i + 1} - label`, label),
                url: text(`Flyout items  ${i + 1} - url`, url),
            })),
            bottomItem: {
                label: text(`Flyout title ${index + 1}`, item.bottomItem.label),
                url: text(`Flyout title ${index + 1}`, item.bottomItem.url),
            },
        })),
    },
});
