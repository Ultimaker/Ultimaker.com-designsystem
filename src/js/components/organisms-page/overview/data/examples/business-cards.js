import businessCardMock from 'molecules/cards/business-card/data/examples/business-card-mock';
import businessCardMakerPoint from 'molecules/cards/business-card/data/examples/business-card-maker-point';
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
                url: 'https://ultimaker.com'
            },
            {
                type: 'ContentLink',
                label: 'Call me back',
                url: 'https://ultimaker.com'
            }
        ]
    },
    sections: [
        {
            type: 'ListSection',
            title: 'Preferred Resellers',
            limit: {
                largeScreen: 3,
                smallScreen: 3
            },
            expand: {
                label: 'Show all'
            },
            cards: [
                businessCardMakerPoint,
                businessCardMock,
                businessCardMock,
                businessCardMock
            ],
            tooltip: tooltipDefault
        },
        {
            type: 'ListSection',
            title: 'Authorized Resellers',
            limit: {
                largeScreen: 3,
                smallScreen: 3
            },
            expand: {
                label: 'Show all'
            },
            cards: [
                businessCardMakerPoint,
                businessCardMock,
                businessCardMock,
                businessCardMock,
                businessCardMock,
                businessCardMock,
                businessCardMock
            ]
        }
    ]
};
