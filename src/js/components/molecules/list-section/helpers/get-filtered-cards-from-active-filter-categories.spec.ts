/** @format */

import { CardArticle } from '@ultimaker/ultimaker.com-model-definitions/dist/molecules/cards/CardArticle';
import { FilterCategoryInterface } from 'components/molecules/filter-category/filter-category.interface';
import { getFilteredCardsFromActiveFilterCategories } from './get-filtered-cards-from-active-filter-categories';

describe('list-section helpers', () => {
    describe('getFilteredCardsFromActiveFilterCategories', () => {
        it('should return an array of cards that represents all cards that match the active filters', () => {
            const activeFilterCategories: FilterCategoryInterface[] = [
                {
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
                },
            ];

            const cards: CardArticle[] = [
                {
                    description:
                        'You know that 3D printing will save money and accelerate development. But introducing a new pilot can be a daunting process – especially if stakeholders are skeptical. Thankfully this free checklist does the heavy lifting.',
                    labels: ['Aerospace', 'End-user parts', 'Manufacturing aids', 'Product development'],
                    title: 'How to successfully introduce 3D printing in your business',
                    url:
                        'https://ultimaker.com/en/stories/52698-new-lab-innovators-print-their-way-to-faster-iterations-and-design-freedom',
                },
                {
                    description:
                        'You know that 3D printing will save money and accelerate development. But introducing a new pilot can be a daunting process – especially if stakeholders are skeptical. Thankfully this free checklist does the heavy lifting.',
                    labels: [
                        'Aerospace',
                        'Humanitarian',
                        'Research',
                        'Medicine',
                        'Manufacturing aids',
                        'Product development',
                    ],
                    title: 'How to successfully introduce 3D printing in your business',
                    url:
                        'https://3d.ultimaker.com/setup-to-success-3d-printing-guide?utm_source=ultimaker.com&amp;utm_medium=knowledge',
                },
            ];

            const expected: CardArticle[] = [
                {
                    description:
                        'You know that 3D printing will save money and accelerate development. But introducing a new pilot can be a daunting process – especially if stakeholders are skeptical. Thankfully this free checklist does the heavy lifting.',
                    labels: ['Aerospace', 'End-user parts', 'Manufacturing aids', 'Product development'],
                    title: 'How to successfully introduce 3D printing in your business',
                    url:
                        'https://ultimaker.com/en/stories/52698-new-lab-innovators-print-their-way-to-faster-iterations-and-design-freedom',
                },
                {
                    description:
                        'You know that 3D printing will save money and accelerate development. But introducing a new pilot can be a daunting process – especially if stakeholders are skeptical. Thankfully this free checklist does the heavy lifting.',
                    labels: [
                        'Aerospace',
                        'Humanitarian',
                        'Research',
                        'Medicine',
                        'Manufacturing aids',
                        'Product development',
                    ],
                    title: 'How to successfully introduce 3D printing in your business',
                    url:
                        'https://3d.ultimaker.com/setup-to-success-3d-printing-guide?utm_source=ultimaker.com&amp;utm_medium=knowledge',
                },
            ];

            expect(getFilteredCardsFromActiveFilterCategories(cards, activeFilterCategories)).toEqual(expected);
        });
    });
});
