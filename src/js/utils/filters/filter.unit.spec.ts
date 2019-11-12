import { ValueFilter } from 'utils/filters/ValueFilter';
import { FilterGroup } from '@ultimaker/ultimaker.com-model-definitions/dist/molecules/filter-group/FilterGroup';

const items = [
    {
        id: 1,
        labels: ['though'],
    },
    {
        id: 2,
        labels: ['strong'],
    },
    {
        id: 3,
        labels: ['though', 'strong', 'flexible'],
    },
    {
        id: 4,
        labels: ['strong', 'pirate', 'developer', 'sausage'],
    },
    {
        id: 5,
        labels: ['though'],
    },
    {
        id: 6,
        labels: ['flexible'],
    },
];

const filterGroup = new FilterGroup();
filterGroup.filterValues = ['though', 'strong', 'flexible', 'pirate', 'developer'];
filterGroup.filterKey = 'labels';

describe('utils', () => {
    describe('value filter', () => {
        it('should correctly register all filter values', () => {
            const filters = new ValueFilter(items, filterGroup);

            const possibleFilters = filters.possibleFilters();

            expect(possibleFilters).toContain('pirate');
            expect(possibleFilters).toContain('developer');
            expect(possibleFilters).toContain('strong');
            expect(possibleFilters).toContain('flexible');
            expect(possibleFilters).toContain('though');
            expect(possibleFilters).not.toContain('sausage');
        });

        it('should correctly register active values', () => {
            const filters = new ValueFilter(items, filterGroup);
            const activeFilterValues = ['pirate'];

            activeFilterValues.forEach((value): void => {
                filters.addActiveFilterValue(value);
            });

            const activeFilters = filters.activeFilters();

            expect(activeFilters).toContain('pirate');
            expect(activeFilters).not.toContain('strong');
            expect(activeFilters).not.toContain('flexible');
            expect(activeFilters).not.toContain('though');
        });

        it('should provide possible values', () => {
            const filters = new ValueFilter(items, filterGroup);
            const activeFilterValues = ['pirate'];

            activeFilterValues.forEach((value): void => {
                filters.addActiveFilterValue(value);
            });

            const filteredItems = filters.filteredItems();

            const possibleFilters = filters.possibleFilters();

            expect(filteredItems[0]).toEqual({
                id: 4,
                labels: ['strong', 'pirate', 'developer', 'sausage'],
            });
            expect(possibleFilters).toContain('developer');
            expect(possibleFilters).toContain('strong');
            expect(possibleFilters).not.toContain('flexible');
            expect(possibleFilters).not.toContain('though');
            expect(possibleFilters).not.toContain('sausage');
        });

        it('should return full result without active filter', () => {
            const filters = new ValueFilter(items, filterGroup);

            const filteredItems = filters.filteredItems();
            expect(filteredItems).toEqual(items);
        });

        it('should filter an array based on values', () => {
            const filters = new ValueFilter(items, filterGroup);

            const activeFilterValues = ['though', 'strong', 'flexible'];

            activeFilterValues.forEach((value): void => {
                filters.addActiveFilterValue(value);
            });

            const filteredItems = filters.filteredItems();

            expect(filteredItems[0]).toEqual({
                id: 3,
                labels: ['though', 'strong', 'flexible'],
            });
        });
    });
});
