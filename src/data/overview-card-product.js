module.exports = {
    type: 'Overview',
    title: 'Explore the benefits of each material',
    sections: [
        {
            type: 'ListSection',
            limit: {
                largeScreen: 2
            },
            showAllLabel: 'Show all',
            cards: [
                require('src/data/card-product-default'),
                require('src/data/card-product-no-image'),
                require('src/data/card-product-no-properties'),
                require('src/data/card-product-no-image-no-properties')
            ]
        }
    ]
};
