<template>
    <section class="filter-category">
        <h4 class="filter-category__title">{{ title }}</h4>
        <form>
            <input
                class="filter-category__reset"
                :class="checkResetFiltersState"
                type="reset"
                :value="showAllLabel"
                @click="resetFilters"
            />
            <ul class="filter-category__list">
                <li
                    class="filter-category__list-item"
                    v-for="(label, key) in labels"
                    :key="key"
                >
                    <label-filter
                        :disabled="isFilterDisabled(label)"
                        :eventChange="eventLabelFilterChange"
                        :label="label"
                        :name="showAllLabel"
                        :value="label"
                        @[eventLabelFilterChange]="handleLabelFilterChange"
                    />
                </li>
            </ul>
        </form>
    </section>
</template>

<script lang="ts">
    import Vue from 'vue';
    import { LabelFilterInterface } from 'components/atoms/label-filter/label-filter.interface';

    export default Vue.component('FilterCategory', {
        props: {
            activeFilters: {
                type: Array,
                default: [],
            },
            labels: {
                type: Array,
                required: true,
            },
            eventChange: {
                type: String,
                required: true,
            },
            showAllLabel: {
                type: String,
                required: true,
            },
            title: {
                type: String,
                required: true,
            },
        },
        data(): { eventLabelFilterChange: string, filters: any } {
            return {
                eventLabelFilterChange: 'label-filter-change',
                filters: this.labels.map((label) => ({
                    checked: false,
                    disabled: false,
                    value: label,
                }))
            }
        },
        watch: {
            activeFilters(): void {
                this.filters = this.filters.map((filter) => ({
                    ...filter,
                    disabled: this.isFilterDisabled(filter.value),
                }));
            },
        },
        computed: {
            category(): string {
                return this.title.toLowerCase().replace(/\s+/g, '-');
            },
            checkResetFiltersState(): string {
                const activeFilter = this.filters.find((filter) => filter.checked);
                return activeFilter ? '' : 'filter-category__reset--active';
            },
        },
        methods: {
            emitEvent(eventName): void {
                this.$emit(eventName, {
                    category: this.category,
                    filters: this.filters,
                });
            },
            handleLabelFilterChange(filter: LabelFilterInterface): void {
                this.updateFilter(filter);
                this.emitEvent(this.eventChange);
            },
            isFilterDisabled(label: string): boolean {
                return !this.activeFilters.includes(label);
            },
            updateFilter(labelFilter: LabelFilterInterface): void {
                const foundIndex = this.filters.findIndex((filter) => filter.value === labelFilter.value);

                this.filters.splice(foundIndex, 1, labelFilter);
            },
            resetFilters(): void {
                if (!this.filters.find((filter) => filter.checked)) {
                    return;
                }

                this.filters = this.filters.map((filter) => ({
                    ...filter,
                    checked: false,
                }));

                this.emitEvent(this.eventChange);
            },
        },
    });
</script>
