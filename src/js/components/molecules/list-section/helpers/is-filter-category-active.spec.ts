/** @format */

import { FilterCategoryInterface } from 'components/molecules/filter-category/filter-category.interface';
import { isFilterCategoryActive } from './is-filter-category-active';

describe('list-section helpers', () => {
    describe('isFilterCategoryActive', () => {
        it('should return `true` when one of the filters is checked', () => {
            const filterCategory: FilterCategoryInterface = {
                category: 'applications',
                filters: [
                    {
                        checked: true,
                        disabled: false,
                        value: 'End-user parts',
                    },
                    {
                        checked: false,
                        disabled: false,
                        value: 'Manufacturing aids',
                    },
                ],
            };

            const expected = true;

            expect(isFilterCategoryActive(filterCategory)).toEqual(expected);
        });

        it('should return `true` when one of the filters is checked and disabled', () => {
            const filterCategory: FilterCategoryInterface = {
                category: 'applications',
                filters: [
                    {
                        checked: true,
                        disabled: true,
                        value: 'End-user parts',
                    },
                    {
                        checked: false,
                        disabled: false,
                        value: 'Manufacturing aids',
                    },
                ],
            };

            const expected = true;

            expect(isFilterCategoryActive(filterCategory)).toEqual(expected);
        });

        it('should return `false` when no filters are checked', () => {
            const filterCategory: FilterCategoryInterface = {
                category: 'applications',
                filters: [
                    {
                        checked: false,
                        disabled: false,
                        value: 'End-user parts',
                    },
                    {
                        checked: false,
                        disabled: false,
                        value: 'Manufacturing aids',
                    },
                ],
            };

            const expected = false;

            expect(isFilterCategoryActive(filterCategory)).toEqual(expected);
        });

        it('should return `false` when no filters are checked, but one is disabled', () => {
            const filterCategory: FilterCategoryInterface = {
                category: 'applications',
                filters: [
                    {
                        checked: false,
                        disabled: true,
                        value: 'End-user parts',
                    },
                    {
                        checked: false,
                        disabled: false,
                        value: 'Manufacturing aids',
                    },
                ],
            };

            const expected = false;

            expect(isFilterCategoryActive(filterCategory)).toEqual(expected);
        });
    });
});
