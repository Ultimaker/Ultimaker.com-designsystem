/** @format */

import { FilterCategoryInterface } from 'components/molecules/filter-category/filter-category.interface';

export function isFilterCategoryActive(filterCategory: FilterCategoryInterface): boolean {
    return filterCategory.filters.find((filter) => filter.checked) !== undefined;
}
