module.exports = {
    listItems: {
        type: 'LiContentBlock',
        items: [
            require('src/data/card-product-default'),
            require('src/data/card-product-no-image'),
            require('src/data/card-product-no-properties'),
            require('src/data/card-product-no-image-no-properties')
        ]
    }
};
