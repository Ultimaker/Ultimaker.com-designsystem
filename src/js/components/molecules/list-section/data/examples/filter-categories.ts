/** @format */

import { applications } from 'components/molecules/filter-category/data/examples/applications';
import { industries } from 'components/molecules/filter-category/data/examples/industries';
import { introduce } from 'components/molecules/cards/card-article/data/examples/introduce';
import { newLab } from 'components/molecules/cards/card-article/data/examples/new-lab';

export const filterCategories = {
    cards: [introduce, newLab, introduce, newLab, introduce, newLab, introduce, newLab],
    filterCategories: [applications, industries],
    limit: {
        expand: {
            label: 'Show all',
        },
        largeScreen: 3,
        smallScreen: 3,
    },
    type: 'list-section',
};
