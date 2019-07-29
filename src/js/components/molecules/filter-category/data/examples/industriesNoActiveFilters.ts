/** format */

import { aerospace } from 'components/atoms/label-filter/data/examples/aerospace';
import { architecture } from 'components/atoms/label-filter/data/examples/architecture';
import { automotive } from 'components/atoms/label-filter/data/examples/automotive';
import { fashion } from 'components/atoms/label-filter/data/examples/fashion';
import { humanitarian } from 'components/atoms/label-filter/data/examples/humanitarian';
import { medicine } from 'components/atoms/label-filter/data/examples/medicine';
import { research } from 'components/atoms/label-filter/data/examples/research';

export const industriesNoActiveFilters = {
    labels: [
        aerospace.label,
        architecture.label,
        automotive.label,
        fashion.label,
        humanitarian.label,
        research.label,
        medicine.label,
    ],
    showAllLabel: 'All industries',
    title: 'Industry',
};
