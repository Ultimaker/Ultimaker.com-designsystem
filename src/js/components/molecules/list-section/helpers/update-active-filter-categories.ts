/** @format */

import { FilterCategoryInterface } from 'components/molecules/filter-category/filter-category.interface';
import { findIndexInActiveFilterCategories } from 'components/molecules/list-section/helpers/find-index-in-active-filter-categories';
import { isFilterCategoryActive } from 'components/molecules/list-section/helpers/is-filter-category-active';

function addActiveFilterCategory(
    activeFilterCategories: FilterCategoryInterface[],
    changedFilterCategory: FilterCategoryInterface,
): FilterCategoryInterface[] {
    activeFilterCategories.push(changedFilterCategory);

    return activeFilterCategories;
}

function removeActiveFilterCategory(
    activeFilterCategories: FilterCategoryInterface[],
    indexInActiveFilterCategories,
): FilterCategoryInterface[] {
    activeFilterCategories.splice(indexInActiveFilterCategories, 1);

    return activeFilterCategories;
}

function updateActiveFilterCategory(
    activeFilterCategories: FilterCategoryInterface[],
    changedFilterCategory: FilterCategoryInterface,
    indexInActiveFilterCategories,
): FilterCategoryInterface[] {
    activeFilterCategories.splice(indexInActiveFilterCategories, 1, changedFilterCategory);

    return activeFilterCategories;
}

export function updateActiveFilterCategories(
    activeFilterCategories: FilterCategoryInterface[],
    changedFilterCategory: FilterCategoryInterface,
): FilterCategoryInterface[] {
    const indexInActiveFilterCategories = findIndexInActiveFilterCategories(
        activeFilterCategories,
        changedFilterCategory,
    );

    const filterCategoryActive = isFilterCategoryActive(changedFilterCategory);

    if (indexInActiveFilterCategories === -1 && filterCategoryActive) {
        return addActiveFilterCategory(activeFilterCategories, changedFilterCategory);
    }

    if (!filterCategoryActive) {
        return removeActiveFilterCategory(activeFilterCategories, indexInActiveFilterCategories);
    }

    return updateActiveFilterCategory(activeFilterCategories, changedFilterCategory, indexInActiveFilterCategories);
}
