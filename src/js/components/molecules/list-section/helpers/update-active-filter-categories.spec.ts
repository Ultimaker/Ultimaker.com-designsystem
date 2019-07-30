/** @format */

import { FilterCategoryInterface } from 'components/molecules/filter-category/filter-category.interface';
import { updateActiveFilterCategories } from './update-active-filter-categories';

describe('list-section helpers', () => {
    describe('updateActiveFilterCategories', () => {
        it('should return a boolean that represents whether or not at least one of the filters is checked', () => {
            const activeFilterCategories: FilterCategoryInterface[] = [
                {
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
                },
            ];

            const changedFilterCategory: FilterCategoryInterface = {
                category: 'applications',
                filters: [
                    {
                        checked: true,
                        disabled: false,
                        value: 'End-user parts',
                    },
                    {
                        checked: true,
                        disabled: false,
                        value: 'Manufacturing aids',
                    },
                ],
            };

            const expected: FilterCategoryInterface[] = [
                {
                    category: 'applications',
                    filters: [
                        {
                            checked: true,
                            disabled: false,
                            value: 'End-user parts',
                        },
                        {
                            checked: true,
                            disabled: false,
                            value: 'Manufacturing aids',
                        },
                    ],
                },
            ];

            expect(updateActiveFilterCategories(activeFilterCategories, changedFilterCategory)).toEqual(expected);
        });
    });
});
