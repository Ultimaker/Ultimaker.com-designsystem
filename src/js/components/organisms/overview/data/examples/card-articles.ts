import { callMeBack } from 'components/atoms/content-button/data/examples/call-me-back';
import { scheduleAnAppointment } from 'components/atoms/content-button/data/examples/schedule-an-appointment';
import { introduce } from 'components/molecules/cards/card-article/data/examples/introduce';
import { noDescription } from 'components/molecules/cards/card-article/data/examples/no-description';
import { noImageNoDescription } from 'components/molecules/cards/card-article/data/examples/no-image-no-description';
import { noLabels } from 'components/molecules/cards/card-article/data/examples/no-labels';

export const cardArticles = {
    type: 'overview',
    title: 'Explore all of our Articles',
    subtitle: 'Yes, all of them!',
    ctas: {
        type: 'CtaBlock',
        ctas: [
            callMeBack,
            scheduleAnAppointment,
        ],
    },
    sections: [
        {
            type: 'list-section',
            limit: {
                expand: {
                    label: 'Show all',
                },
                largeScreen: 3,
                smallScreen: 3,
            },
            cards: [
                introduce,
                noLabels,
                noDescription,
                noImageNoDescription,
                introduce,
                noLabels,
                noDescription,
                introduce,
                noLabels,
                noDescription,
                noImageNoDescription,
                introduce,
                noDescription,
            ],
        },
    ],
};
