/** @format */

import { FilterCategoryInterface } from 'components/molecules/filter-category/filter-category.interface';

export function findIndexInActiveFilterCategories(
    activeFilterCategories: FilterCategoryInterface[],
    changedFilterCategory: FilterCategoryInterface,
): number {
    return activeFilterCategories.findIndex(
        (activeFilterCategory) => activeFilterCategory.category === changedFilterCategory.category,
    );
}
