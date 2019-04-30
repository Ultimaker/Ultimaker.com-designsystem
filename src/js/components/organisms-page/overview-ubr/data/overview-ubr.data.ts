import blockIconMock from '../../../molecules/block-icon/data/block-icon.data';

export default (amountOfItems: number) => {
    const blockIconMocks: any[] = [];

    for (let i = 0; i < amountOfItems; i += 1) {
        blockIconMocks.push(blockIconMock);
    }

    return {
        title: 'Lorem ipsum dolor sit amet',
        subtitle: 'Architecto deleniti, et vel eum quam.',
        items: blockIconMocks,
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
    };
};
