/** @format */
import { Component, Prop, Vue } from 'vue-property-decorator';
import ViewportUtil from 'utils/viewport';
import { AutoCompleteItem, AutoCompleteProps } from './auto-complete.models';
import WithRender from './auto-complete.vue.html';
import escapeStringRegexp from 'escape-string-regexp';

@WithRender
@Component({
    name: 'auto-complete',
})
export default class AutoComplete extends Vue implements AutoCompleteProps {
    @Prop({ type: Object, required: true }) datasource!: AutoCompleteProps['datasource'];
    @Prop({ type: Array, default: () => [] }) highlightedKeys!: any[];
    @Prop({ type: String, required: true }) highlightedLabel!: AutoCompleteProps['highlightedLabel'];
    @Prop({ type: String, required: true }) label!: AutoCompleteProps['label'];
    @Prop({ type: Number, default: 1 }) minChar!: number;
    @Prop({ type: String, required: true }) placeholder!: AutoCompleteProps['placeholder'];
    @Prop({ type: Boolean }) showSuggestions?: boolean;
    @Prop({ type: String, required: true }) suggestionsLabel!: AutoCompleteProps['suggestionsLabel'];

    input: string = '';
    reversed: boolean = false;
    // selectedItem: AutoCompleteItem | null = null;
    selectedIndex: number = -1;
    viewportUtil = new ViewportUtil();

    get classObject(): object {
        return {
            'auto-complete--reversed': this.reversed,
        };
    }

    get hasInput(): boolean {
        return this.input.length > 0;
    }

    get autoCompleteItems(): AutoCompleteItem[] {
        const items: AutoCompleteItem[] = [];

        Object.keys(this.datasource).forEach((key) => {
            if (key !== 'type') {
                items.push({
                    title: `${this.datasource[key]} - ${key}`,
                    value: key,
                });
            }
        });

        return items;
    }

    get autoCompleteId() {
        return `autocomplete-${Math.floor(Math.random() * 10000)}`;
    }

    get listItems() {
        return this.$refs.listItems as HTMLElement[];
    }

    get highlightedItems(): AutoCompleteItem[] {
        const highlightedItems: AutoCompleteItem[] = [];

        if (!this.highlightedKeys.length) {
            return highlightedItems;
        }

        return this.autoCompleteItems.filter((autoCompleteItem) => this.highlightedKeys.includes(autoCompleteItem.value));
    }

    get suggestedItems(): AutoCompleteItem[] {
        const suggestedItems: AutoCompleteItem[] = this.filterOutHighlightedItems(this.highlightedKeys);

        if (!this.hasInput) {
            if (this.showSuggestions) {
                return suggestedItems;
            }

            return [];
        }

        return this.filterAutoCompleteItemsTitleByString(suggestedItems, this.input);
    }

    calculateDirection(): void {
        if (!this.$refs.autoCompleteInput) {
            return;
        }

        const windowTop = this.viewportUtil.scrollY;
        const windowBottom = windowTop + this.viewportUtil.screenHeight * (2 / 3);
        const inputBounds = (this.$refs.autoCompleteInput as HTMLElement).getBoundingClientRect();
        const inputTop = this.viewportUtil.scrollY + inputBounds.top;
        const inputBottom = inputTop + inputBounds.height;

        this.reversed = windowBottom < inputBottom;
    }

    clearSelection(): void {
        this.input = '';
    }

    filterAutoCompleteItemsTitleByString(list, string): AutoCompleteItem[] {
        return list.filter((autoCompleteItem) => new RegExp(escapeStringRegexp(string), 'i').test(autoCompleteItem.title));
    }

    filterOutHighlightedItems(filterKeys): AutoCompleteItem[] {
        if (!filterKeys.length) {
            return this.autoCompleteItems;
        }

        return this.autoCompleteItems.filter((autoCompleteItem) => !filterKeys.includes(autoCompleteItem.value));
    }

    focus(): void {
        if (!this.$refs.autoCompleteInput) {
            return;
        }

        (this.$refs.autoCompleteInput as HTMLInputElement).focus();
    }

    highlightItem(direction) {
        this.selectedIndex = this.selectedIndex + direction;

        if (this.selectedIndex > this.listItems.length - 1) {
            this.selectedIndex = 0;
        }

        if (this.selectedIndex < 0) {
            this.selectedIndex = this.listItems.length - 1;
        }

        this.listItems[this.selectedIndex].focus();
    }

    highlightString(data): string {
        const stringToReplace = new RegExp(escapeStringRegexp(this.input), 'i');
        const matches = data.match(stringToReplace);

        if (!matches) {
            return data;
        }

        return data.replace(stringToReplace, `<span class="auto-complete__value">${matches[0]}</span>`);
    }

    keyEscapeHandler() {
        this.clearSelection();
        this.reportSelectionMade(null);
    }

    reportSelectionMade(item:AutoCompleteItem|null): void {
        let code: string | null = null;

        if (item) {
            code = item.value;
        }

        this.$emit('auto-complete-input', code);
    }

    selectItem(item): void {
        this.reportSelectionMade(item);
        this.clearSelection();
    }

    mounted() {
        this.focus();
        this.viewportUtil.addScrollHandler(this.calculateDirection);
        this.viewportUtil.addResizeHandler(this.calculateDirection);
        Vue.nextTick(this.calculateDirection);
    }
}
