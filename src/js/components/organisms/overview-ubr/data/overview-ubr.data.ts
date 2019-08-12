import blockIconMock from '../../../molecules/block-icon/data/block-icon.data';

export const data = {
    default: {
        title: 'Lorem ipsum dolor sit amet',
        subtitle: 'Architecto deleniti, et vel eum quam.',
        items: [blockIconMock, blockIconMock, blockIconMock],
        ctas: {
            type: 'CtaBlock',
            ctas: [
                {
                    type: 'ContentButton',
                    label: 'Call me back',
                    url: 'https://ultimaker.com',
                },
                {
                    type: 'ContentButton',
                    label: 'Call me back',
                    url: 'https://ultimaker.com',
                },
            ],
        },
        type: 'overview-ubr',
    },
};
