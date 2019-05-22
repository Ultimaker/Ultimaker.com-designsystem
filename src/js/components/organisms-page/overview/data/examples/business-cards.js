import { data as cards } from 'molecules/cards/business-card/data/business-card.data';
import tooltipDefault from 'atoms/tooltip/data/examples/tooltip-default';

export default {
    type: 'Overview',
    title: 'Find your reseller in the Netherlands',
    subtitle: 'Or just get a subtitle',
    ctas: {
        type: 'CtaBlock',
        ctas: [
            {
                type: 'ContentButton',
                label: 'Call me back',
                url: 'https://ultimaker.com',
            },
            {
                type: 'ContentLink',
                label: 'Call me back',
                url: 'https://ultimaker.com',
            },
        ],
    },
    sections: [
        {
            type: 'ListSection',
            title: 'Preferred Resellers',
            limit: {
                largeScreen: 3,
                smallScreen: 3,
            },
            expand: {
                label: 'Show all',
            },
            cards: [
                cards.makerPoint,
                cards.default,
                cards.default,
                cards.default,
            ],
            tooltip: tooltipDefault,
        },
        {
            type: 'ListSection',
            title: 'Authorized Resellers',
            limit: {
                largeScreen: 3,
                smallScreen: 3,
            },
            expand: {
                label: 'Show all',
            },
            cards: [
                cards.makerPoint,
                cards.default,
                cards.default,
                cards.default,
                cards.default,
                cards.default,
                cards.default,
            ],
        },
    ],
};
