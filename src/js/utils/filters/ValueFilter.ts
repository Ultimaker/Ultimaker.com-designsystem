import { ValueFilterInterface } from 'utils/filters/ValueFilterInterface';
import { FilterGroup } from '@ultimaker/ultimaker.com-model-definitions/dist/molecules/filter-group/FilterGroup';

export class ValueFilter implements ValueFilterInterface {
    filterGroup: FilterGroup | undefined = undefined;
    filterValues: string[] = [];
    activeFilterValues: string[] = [];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    items: any[] = [];

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    constructor(items: any[], filterGroup: FilterGroup | undefined) {
        this.items = items;
        this.filterGroup = filterGroup;

        this.filterValues = filterGroup ? filterGroup.filterValues : [];
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setFilterValues(filterValues: any[]): void {
        this.filterValues = filterValues;
    }

    activeFilters(): string[] {
        return this.activeFilterValues;
    }

    possibleFilters(): string[] {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const possibleFilters: any[] = [];
        if (this.filterGroup === undefined) {
            return [];
        }
        this.filteredItems().forEach((item): void => {
            if (this.filterGroup === undefined) {
                return;
            }
            if (item[this.filterGroup.filterKey] === undefined) {
                return;
            }

            item[this.filterGroup.filterKey].forEach((value): void => {
                possibleFilters.push(value);
            });
        });

        return Array.from(new Set(possibleFilters.filter((filterValue): boolean => this.filterValues.includes(filterValue))));
    }

    addActiveFilterValue(value: string): void {
        this.activeFilterValues.push(value);
    }

    removeActiveFilterValue(value: string): void {
        this.activeFilterValues = this.activeFilterValues.filter((filterValue): boolean => filterValue !== value);
    }

    isFilterActive(value: string): boolean {
        return this.activeFilterValues.includes(value);
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    filterItemsByValues(): any[] {
        return this.items.filter(
            (item): boolean => this.activeFilterValues.every(
                (value): boolean => {
                    if (this.filterGroup === undefined) {
                        return false;
                    }
                    if (item[this.filterGroup.filterKey] === undefined) {
                        return false;
                    }
                    return item[this.filterGroup.filterKey].includes(value);
                },
            ),
        );
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    filteredItems(): any[] {
        return this.filterItemsByValues();
    }
}
