/** @format */

import { FilterCategoryInterface } from 'components/molecules/filter-category/filter-category.interface';
import { getActiveFiltersForCategory } from './get-active-filters-for-category';

describe('list-section helpers', () => {
    describe('getActiveFiltersForCategory', () => {
        it('should return an array of strings that represents checked filters, which are not disabled', () => {
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
                    {
                        checked: true,
                        disabled: false,
                        value: 'Product development',
                    },
                ],
            };

            const expected = ['Product development'];

            expect(getActiveFiltersForCategory(filterCategory)).toEqual(expected);
        });
    });
});
