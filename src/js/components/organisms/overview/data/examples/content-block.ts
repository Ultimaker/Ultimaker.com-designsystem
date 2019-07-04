import { callMeBack } from 'components/atoms/content-button/data/examples/call-me-back';
import { scheduleAnAppointment } from 'components/atoms/content-button/data/examples/schedule-an-appointment';
import { mockTooltip } from 'components/atoms/tooltip/data/examples/mock-tooltip';
import { mockContentBlock } from 'components/molecules/content-block/data/examples/mock-content-block';

export const contentBlocks = {
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
            title: 'Title',
            limit: {
                largeScreen: 6,
                smallScreen: 3,
            },
            expand: {
                label: 'Show all',
            },
            cards: [
                mockContentBlock,
                mockContentBlock,
                mockContentBlock,
                mockContentBlock,
                mockContentBlock,
                mockContentBlock,
                mockContentBlock,
                mockContentBlock,
            ],
            tooltip: mockTooltip,
        },
        {
            type: 'ListSection',
            title: 'Title',
            limit: {
                largeScreen: 6,
                smallScreen: 3,
            },
            expand: {
                label: 'Show all',
            },
            cards: [
                mockContentBlock,
                mockContentBlock,
                mockContentBlock,
                mockContentBlock,
                mockContentBlock,
                mockContentBlock,
                mockContentBlock,
                mockContentBlock,
            ],
            tooltip: mockTooltip,
        },
    ],
};
