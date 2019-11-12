import { FilterInterface } from 'utils/filters/FilterInterface';
import { FilterGroup } from '@ultimaker/ultimaker.com-model-definitions/dist/molecules/filter-group/FilterGroup';

export interface ValueFilterInterface extends FilterInterface {
    filterValues: string[];
    activeFilterValues: string[];
    filterGroup: FilterGroup | undefined;

    addActiveFilterValue(value: string): void;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    filterItemsByValues(): any[];

    activeFilters(): string[];

    possibleFilters(): string[];
}
