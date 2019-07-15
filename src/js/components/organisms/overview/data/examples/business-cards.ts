import { callMeBack } from 'components/atoms/content-button/data/examples/call-me-back';
import { scheduleAnAppointment } from 'components/atoms/content-button/data/examples/schedule-an-appointment';
import { data as cards } from 'components/molecules/cards/business-card/data/business-card.data';
import { mockTooltip } from 'components/atoms/tooltip/data/examples/mock-tooltip';
import { businessCards as businessCardsExample } from 'components/molecules/list-section/data/examples/business-cards';

export const businessCards = {
    type: 'Overview',
    title: 'Find your reseller in the Netherlands',
    subtitle: 'Or just get a subtitle',
    ctas: {
        type: 'CtaBlock',
        ctas: [
            callMeBack,
            scheduleAnAppointment,
        ],
    },
    sections: [
        {
            type: 'ListSection',
            title: 'Preferred Resellers',
            limit: {
                expand: {
                    label: 'Show all',
                },
                largeScreen: 3,
                smallScreen: 3,
            },
            cards: [
                cards.makerPoint,
                cards.default,
                cards.default,
                cards.default,
            ],
            tooltip: mockTooltip,
        },
        businessCardsExample,
    ],
};
