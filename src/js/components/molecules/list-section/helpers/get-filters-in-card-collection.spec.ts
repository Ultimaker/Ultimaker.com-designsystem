/** @format */

import { CardArticle } from '@ultimaker/ultimaker.com-model-definitions/dist/molecules/cards/CardArticle';
import { getFiltersInCardCollection } from './get-filters-in-card-collection';

describe('list-section helpers', () => {
    describe('getFiltersInCardCollection', () => {
        it('should return an array of strings that represents all labels in the card collection, without duplicates', () => {
            const filteredCards: CardArticle[] = [
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

            const expected = [
                'Aerospace',
                'End-user parts',
                'Manufacturing aids',
                'Product development',
                'Humanitarian',
                'Research',
                'Medicine',
            ];

            expect(getFiltersInCardCollection(filteredCards)).toEqual(expected);
        });
    });
});
