import {data} from 'molecules/cards/card-product/data/card-product.data';

export default {
    type: 'overview',
    title: 'Explore the benefits of each material',
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
                type: 'ContentButton',
                label: 'Call me back',
                url: 'https://ultimaker.com'
            }
        ]
    },
    sections: [
        {
            type: 'list-section',
            limit: {
                largeScreen: 3,
                smallScreen: 3
            },
            expand: {
                label: 'Show all'
            },
            cards: [
                data.nylon,
                data.pla,
                data.nylon,
                data.pla,
                data.noImage,
                data.noProperties,
                data.noImageNoProperties
            ]
        }
    ]
};
