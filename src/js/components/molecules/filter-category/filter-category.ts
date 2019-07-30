/** @format */

import { Vue, Component, Prop, Watch } from 'vue-property-decorator';
import WithRender from './filter-category.vue.html';

import { FilterCategoryProps } from './filter-category.models';
import { LabelFilterInterface } from 'components/atoms/label-filter/label-filter.interface';

@WithRender
@Component({ name: 'FilterCategory' })
export class FilterCategory extends Vue implements FilterCategoryProps {
    @Prop({ type: Array }) activeFilters?: FilterCategoryProps['activeFilters'];
    @Prop({ type: Array, required: true }) labels!: FilterCategoryProps['labels'];
    @Prop({ type: String, required: true }) eventChange!: FilterCategoryProps['eventChange'];
    @Prop({ type: String, required: true }) showAllLabel!: FilterCategoryProps['showAllLabel'];
    @Prop({ type: String, required: true }) title!: FilterCategoryProps['title'];

    eventLabelFilterChange: string = 'label-filter-change';

    filters: any = this.labels.map((label) => ({
        checked: false,
        disabled: this.isFilterDisabled(label.label),
        value: label.label,
    }));

    get category(): string {
        return this.title.toLowerCase().replace(/\s+/g, '-');
    }

    get checkResetFiltersState(): string {
        const activeFilter = this.filters.find((filter) => filter.checked);
        return activeFilter ? '' : 'filter-category__reset--active';
    }

    @Watch('activeFilters')
    watchActiveFilters() {
        this.filters = this.filters.map((filter) => ({
            ...filter,
            disabled: this.isFilterDisabled(filter.value),
        }));
    }

    emitEvent(eventName) {
        this.$emit(eventName, {
            category: this.category,
            filters: this.filters,
        });
    }

    handleLabelFilterChange(filter: LabelFilterInterface) {
        this.updateFilter(filter);
        this.emitEvent(this.eventChange);
    }

    isFilterDisabled(label: string): boolean {
        if (!this.activeFilters || this.activeFilters.length === 0) {
            return false;
        }

        return !this.activeFilters.includes(label);
    }

    updateFilter(labelFilter: LabelFilterInterface) {
        const foundIndex = this.filters.findIndex((filter) => filter.value === labelFilter.value);

        this.filters.splice(foundIndex, 1, labelFilter);
    }

    resetFilters() {
        if (!this.filters.find((filter) => filter.checked)) {
            return;
        }

        this.filters = this.filters.map((filter) => ({
            ...filter,
            checked: false,
        }));

        this.emitEvent(this.eventChange);
    }
}
