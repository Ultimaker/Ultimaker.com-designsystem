import { callMeBack } from 'components/atoms/content-button/data/examples/call-me-back';
import { scheduleAnAppointment } from 'components/atoms/content-button/data/examples/schedule-an-appointment';
import { data } from 'components/molecules/cards/card-product/data/card-product.data';

export const cardProducts = {
    type: 'overview',
    title: 'Explore the benefits of each material',
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
            type: 'list-section',
            limit: {
                expand: {
                    label: 'Show all',
                },
                largeScreen: 3,
                smallScreen: 3,
            },
            cards: [
                data.nylon,
                data.pla,
                data.nylon,
                data.pla,
                data.noImage,
                data.noProperties,
                data.noImageNoProperties,
            ],
        },
    ],
};
