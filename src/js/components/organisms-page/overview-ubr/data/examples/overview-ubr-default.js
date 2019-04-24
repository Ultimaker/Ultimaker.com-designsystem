import blockIconMock from 'molecules/block-icon/data/examples/block-icon-default';

export default {
    title: 'Lorem ipsum dolor sit amet',
    subtitle: 'Architecto deleniti, et vel eum quam.',
    items: [
        blockIconMock,
        blockIconMock,
        blockIconMock,
        blockIconMock
    ],
    ctas: {
        type: 'CtaBlock',
        ctas: [
            {
                type: 'ContentButton',
                label: 'Call me back',
                url: 'https://ultimaker.com'
            },
            {
                type: 'ContentButton',
                label: 'Call me back',
                url: 'https://ultimaker.com'
            }
        ]
    },
    type: 'OverviewUBR'
};
