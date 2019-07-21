/** @format */

import { Vue, Component, Prop } from 'vue-property-decorator';
import WithRender from './filter-category.vue.html';

import { FilterCategoryProps } from './filter-category.models';

@WithRender
@Component({
    name: 'FilterCategory',
})
export class FilterCategory extends Vue implements FilterCategoryProps {
    @Prop({ type: Array, required: true }) labels!: FilterCategoryProps['labels'];
    @Prop({ type: String, required: true }) showAllLabel!: FilterCategoryProps['showAllLabel'];
    @Prop({ type: String, required: true }) title!: FilterCategoryProps['title'];

    filters: string[] = [];

    get category() {
        return this.title.toLowerCase().replace(/\s+/g, '-');
    }

    get payload() {
        return {
            category: this.category,
            filters: this.filters,
        };
    }

    get toggleActive() {
        return this.filters.length ? '' : 'filter-category__reset--active';
    }

    handleLabelFilterChange(payload) {
        if (payload.checked) {
            this.filters.push(payload.value);
        } else {
            this.filters = this.filters.filter((filter) => filter !== payload.value);
        }

        this.$emit('filter-category-change', this.payload);
    }

    resetFilters() {
        this.filters = [];
        this.$emit('filter-category-change', this.payload);
    }
}
