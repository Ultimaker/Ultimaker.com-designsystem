module.exports = {
    type: 'Overview',
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
                type: 'ContentLink',
                label: 'Call me back',
                url: 'https://ultimaker.com'
            }
        ]
    },
    sections: [
        {
            type: 'ListSection',
            title: 'This is a title for section',
            limit: {
                largeScreen: 6
            },
            expand: {
                label: 'Show all'
            },
            cards: [
                require('src/data/card-product-default'),
                require('src/data/card-product-no-image'),
                require('src/data/card-product-no-properties'),
                require('src/data/card-product-no-image-no-properties'),
                require('src/data/card-product-default'),
                require('src/data/card-product-no-image'),
                require('src/data/card-product-no-properties'),
                require('src/data/card-product-no-image-no-properties')
            ]
        }
    ]
};
