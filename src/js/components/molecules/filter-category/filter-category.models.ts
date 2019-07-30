/** @format */

import { FilterCategory } from '@ultimaker/ultimaker.com-model-definitions/dist/molecules/filter-category/FilterCategory';

export interface FilterCategoryProps extends FilterCategory {
    activeFilters?: string[];
    eventChange: string;
}
