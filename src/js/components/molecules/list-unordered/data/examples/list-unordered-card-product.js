import {data}  from 'molecules/cards/card-product/data/card-product.data';

export default {
    listItems: {
        type: 'LiItem',
        items: [
            {
                item: {
                    item: data.nylon,
                    type: 'CardProduct'
                }
            },
            {
                item: {
                    item: data.noImage,
                    type: 'CardProduct'
                }
            },
            {
                item: {
                    item: data.noProperties,
                    type: 'CardProduct'
                }
            },
            {
                item: {
                    item: data.noImageNoProperties,
                    type: 'CardProduct'
                }
            }
        ]
    }
};
