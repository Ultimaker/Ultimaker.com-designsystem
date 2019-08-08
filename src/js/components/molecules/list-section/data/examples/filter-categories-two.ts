/** @format */

import { printingGuide } from 'components/molecules/cards/card-article/data/examples/3d-printing-guide';
import { introduce } from 'components/molecules/cards/card-article/data/examples/introduce';
import { newLab } from 'components/molecules/cards/card-article/data/examples/new-lab';
import { noLabels } from 'components/molecules/cards/card-article/data/examples/no-labels';
import { stopWasting } from 'components/molecules/cards/card-article/data/examples/stop-wasting';

export const filterCategoriesTwo = {
    cards: [introduce, newLab, noLabels, printingGuide, stopWasting],
    filterCategories: [
        {
            eventChange: 'filter-category-change',
            labels: ['End-user parts', 'Manufacturing aids', 'Product development'],
            showAllLabel: 'All applications',
            title: 'Application',
        },
        {
            eventChange: 'filter-category-change',
            labels: ['Aerospace', 'Architecture', 'Automotive', 'Fashion', 'Humanitarian', 'Medicine', 'Research'],
            showAllLabel: 'All industries',
            title: 'Industry',
        },
    ],
    limit: {
        expand: {
            label: 'Show all',
        },
        largeScreen: 3,
        smallScreen: 3,
    },
    type: 'list-section',
};
