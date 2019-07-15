/** @format */

import { data } from 'components/molecules/cards/card-product/data/card-product.data';

export const cardProducts = {
    cards: [data.nylon, data.pla, data.nylon, data.pla, data.noImage, data.noProperties, data.noImageNoProperties],
    limit: {
        expand: {
            label: 'Show all',
        },
        largeScreen: 3,
        smallScreen: 3,
    },
    type: 'list-section',
};
