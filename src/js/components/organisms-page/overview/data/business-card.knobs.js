import {text, files, number, select} from '@storybook/addon-knobs';
import data from 'organisms-page/overview/data/examples/business-cards.js';
import {unique, keyValueMap} from 'stories/helpers/functions';

const availableTypes = unique(data.overview.ctas.ctas.map(({type}) => type));
const options = keyValueMap(availableTypes);

const defineTooltip = (value) => {
    return value ? {
        ...value,
        label: text('List-section ${index} - tooltip label', value.label),
        icon: text('List-section ${index} - tooltip icon', value.icon),
        description: text('List-section ${index}- tooltip label', value.description)
    } : undefined;
};

export default () => (
    {
        overview: {
            ...data,
            title: text('Overview title', data.overview.title),
            subtitle: text('Overview subtitle', data.overview.subtitle),
            ctas: {
                ...data.overview.ctas,
                ctas: data.overview.ctas.ctas.map(
                    (cta, index) => (
                        {
                            ...cta,
                            type: select(`CTA-block ${index + 1} - type:`, options, cta.type),
                            label: text(`CTA-block ${index + 1} - label`, cta.label)
                        }
                    )
                )
            },
            sections: data.overview.sections.map(
                (section, index) => {
                    return {
                        ...section,
                        title: text(`List-section ${index} - title`, section.title),
                        limit: number(`List-section ${index} - limit`, section.limit),
                        showAllLabel: text(`List-section ${index} - label`, section.showAllLabel),
                        cards: section.cards.map(
                            (card, i) => (
                                {
                                    ...card,
                                    title: text(`Business-Card title ${index}`, card.title),
                                    properties: card.properties.map(
                                        // eslint-disable-next-line
                                        ({label, value}, j) =>
                                            (
                                                {
                                                    label: text(`Business-Card ${index}-${i} property ${j + 1} - label`, label),
                                                    value: text(`Business-Card ${index}-${i} property ${j + 1} - value`, value)
                                                }
                                            )
                                    ),
                                    contentLink: {
                                        ...card.contentLink,
                                        label: text(`Business-Card contentLink label ${index}-${i}`, card.contentLink.label),
                                        url: text(`Business-Card contentLink url ${index}-${i}`, card.contentLink.url)
                                    },
                                    image: {
                                        ...card.image,
                                        desktopUrl: files(`Business-Card desktop image ${index}-${i}`, ['image/png', 'image/svg+xml'], '/generator/svg/120/120'),
                                        mobileUrl: files(`Business-Card mobile image ${index}-${i}`, ['image/svg+xml'], '/generator/svg/120/120')
                                    }
                                }
                            )
                        ),
                        tooltip: defineTooltip(section.tooltip, index)
                    };
                }
            )
        }
    }
);
