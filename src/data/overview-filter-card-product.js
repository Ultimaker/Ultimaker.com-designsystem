module.exports = {
    type: 'OverviewFilter',
    title: 'Explore the benefits of each material',
    sections: [
        {
            type: 'ListShowAll',
            limit: 2,
            label: 'Show all',
            list: {
                listItems: {
                    type: 'LiContentBlock',
                    items: [
                        require('src/data/card-product-default'),
                        require('src/data/card-product-no-image'),
                        require('src/data/card-product-no-properties'),
                        require('src/data/card-product-no-image-no-properties')
                    ]
                }
            }
        }
    ]
};
