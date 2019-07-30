/** @format */

import { LabelFilterInterface } from 'components/atoms/label-filter/label-filter.interface';
import { FilterCategoryInterface } from 'components/molecules/filter-category/filter-category.interface';

export function getActiveFiltersForCategory(filterCategory: FilterCategoryInterface): string[] {
    return filterCategory.filters.reduce((acc: string[], filter: LabelFilterInterface) => {
        if (filter.checked && !filter.disabled) {
            acc.push(filter.value);
        }

        return acc;
    }, []);
}
