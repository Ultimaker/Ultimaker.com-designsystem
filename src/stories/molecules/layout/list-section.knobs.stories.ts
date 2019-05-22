import { text, number, files } from '@storybook/addon-knobs';
import data from './list-section.stories.json';

export default () => ({
    ...data,
    title: text('List-section - title', data.listSection.title),
    limit: {
        smallScreen: number('List-section - limit small screen', data.listSection.limit.smallScreen),
        largeScreen: number('List-section - limit large screen', data.listSection.limit.largeScreen),
    },
    showAllLabel: text('List-section - label', data.listSection.showAllLabel),
    cards: data.listSection.cards.map((card, index) => ({
        ...card,
        title: text(`Business-Card title ${index}`, card.title),
        properties: card.properties.map(({ label, value }, i) => ({
            label: text(`Business-Card ${index} property ${i + 1} - label`, label),
            value: text(`Business-Card ${index} property ${i + 1} - value`, value),
        })),
        contentLink: {
            ...card.contentLink,
            label: text(`Business-Card contentLink label ${index}`, card.contentLink.label),
            url: text(`Business-Card contentLink url ${index}`, card.contentLink.url),
        },
        image: {
            ...card.image,
            desktopUrl: files(`Business-Card desktop image ${index}`, ['image/png', 'image/svg+xml'], '/generator/svg/120/120'),
            mobileUrl: files(`Business-Card mobile image ${index}`, ['image/svg+xml'], '/generator/svg/120/120'),
        },
    })),
    tooltip: {
        ...data.listSection.tooltip,
        label: text('List-section - tooltip label', data.listSection.tooltip.label),
        icon: text('List-section - tooltip icon', data.listSection.tooltip.icon),
        description: text('List-section - tooltip label', data.listSection.tooltip.description),
    },
});
