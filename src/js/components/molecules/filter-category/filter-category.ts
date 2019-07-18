/** @format */

import { Vue, Component, Prop } from 'vue-property-decorator';
import { FilterCategoryProps } from './filter-category.models';
import WithRender from './filter-category.vue.html';

@WithRender
@Component({
    name: 'FilterCategory',
})
export class FilterCategory extends Vue implements FilterCategoryProps {
    @Prop({ type: Array, required: true }) labels!: FilterCategoryProps['labels'];
    @Prop({ type: String, required: true }) showAllLabel!: FilterCategoryProps['showAllLabel'];
    @Prop({ type: String, required: true }) title!: FilterCategoryProps['title'];

    /**
     * @type PublicEventService.emit
     */
    $emitPublic;

    /**
     * @type PublicEventService.off
     */
    $offPublic;

    /**
     * @type PublicEventService.on
     */
    $onPublic;

    filters: any = [];

    beforeDestroy() {
        this.$offPublic(`checkboxChange-${this.category}`, this.handleFilterChange);
    }

    mounted() {
        this.$onPublic(`checkboxChange-${this.category}`, this.handleFilterChange);
    }

    get category() {
        return this.title.toLowerCase().replace(/\s+/g, '-');
    }

    get payload() {
        return {
            category: this.category,
            filters: this.filters,
        };
    }

    handleFilterChange(payload) {
        if (payload.checked) {
            this.filters.push(payload.value);
        } else {
            this.filters = this.filters.filter((filter) => filter !== payload.value);
        }

        this.$emitPublic('filterChange', this.payload);
    }

    resetActive() {
        return this.filters.length ? '' : 'filter-category__reset--active';
    }

    resetFilters() {
        this.filters = [];
        this.$emitPublic('filterChange', this.payload);
    }
}
