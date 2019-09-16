/** @format */
import { Component, Prop, Vue } from 'vue-property-decorator';
import ViewportUtil from 'utils/viewport';
import { AutoCompleteField } from '@ultimaker/ultimaker.com-model-definitions/dist/molecules/fields/AutoCompleteField';
import { AutoCompleteItem } from './auto-complete-item.interface';
import WithRender from './auto-complete.vue.html';
import escapeStringRegexp from 'escape-string-regexp';

@WithRender
@Component({
    name: 'auto-complete',
})
export default class AutoComplete extends Vue implements AutoCompleteField {
    @Prop({ type: Object, required: true }) public datasource!: AutoCompleteField['datasource'];
    @Prop({ type: Array, default: (): string[] => [] }) public highlightedKeys!: string[];
    @Prop({ type: String, required: true }) public highlightedLabel!: AutoCompleteField['highlightedLabel'];
    @Prop({ type: String, required: true }) public label!: AutoCompleteField['label'];
    @Prop({ type: Number, default: 1 }) public minChar!: number;
    @Prop({ type: String, required: true }) public placeholder!: AutoCompleteField['placeholder'];
    @Prop({ type: Boolean }) public showSuggestions?: boolean;
    @Prop({ type: String, required: true }) public suggestionsLabel!: AutoCompleteField['suggestionsLabel'];

    private input: string = '';
    private reversed: boolean = false;
    private selectedIndex: number = -1;
    private viewportUtil = new ViewportUtil();

    private get classObject(): object {
        return {
            'auto-complete--reversed': this.reversed,
        };
    }

    private get hasInput(): boolean {
        return this.input.length > 0;
    }

    private get autoCompleteItems(): AutoCompleteItem[] {
        const items: AutoCompleteItem[] = [];

        Object.keys(this.datasource).forEach((key: string): void => {
            if (key !== 'type') {
                items.push({
                    title: `${this.datasource[key]} - ${key}`,
                    value: key,
                });
            }
        });

        return items;
    }

    private get autoCompleteId(): string {
        return `autocomplete-${Math.floor(Math.random() * 10000)}`;
    }

    private get listItems(): HTMLElement[] {
        return this.$refs.listItems as HTMLElement[];
    }

    private get highlightedItems(): AutoCompleteItem[] {
        const highlightedItems: AutoCompleteItem[] = [];

        if (!this.highlightedKeys.length) {
            return highlightedItems;
        }

        return this.autoCompleteItems.filter((autoCompleteItem): boolean => this.highlightedKeys.includes(autoCompleteItem.value));
    }

    private get suggestedItems(): AutoCompleteItem[] {
        const suggestedItems: AutoCompleteItem[] = this.filterOutHighlightedItems(this.highlightedKeys);

        if (!this.hasInput) {
            if (this.showSuggestions) {
                return suggestedItems;
            }

            return [];
        }

        return this.filterAutoCompleteItemsTitleByString(suggestedItems, this.input);
    }

    private calculateDirection(): void {
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

    private clearSelection(): void {
        this.input = '';
    }

    private filterAutoCompleteItemsTitleByString(list: AutoCompleteItem[], string: string): AutoCompleteItem[] {
        return list.filter((autoCompleteItem): boolean => new RegExp(escapeStringRegexp(string), 'i').test(autoCompleteItem.title));
    }

    private filterOutHighlightedItems(filterKeys: string[]): AutoCompleteItem[] {
        if (!filterKeys.length) {
            return this.autoCompleteItems;
        }

        return this.autoCompleteItems.filter((autoCompleteItem): boolean => !filterKeys.includes(autoCompleteItem.value));
    }

    private focus(): void {
        if (!this.$refs.autoCompleteInput) {
            return;
        }

        (this.$refs.autoCompleteInput as HTMLInputElement).focus();
    }

    private highlightItem(direction: number): void {
        this.selectedIndex = this.selectedIndex + direction;

        if (this.selectedIndex > this.listItems.length - 1) {
            this.selectedIndex = 0;
        }

        if (this.selectedIndex < 0) {
            this.selectedIndex = this.listItems.length - 1;
        }

        this.listItems[this.selectedIndex].focus();
    }

    private highlightString(data: string): string {
        const stringToReplace = new RegExp(escapeStringRegexp(this.input), 'i');
        const matches = data.match(stringToReplace);

        if (!matches) {
            return data;
        }

        return data.replace(stringToReplace, `<span class="auto-complete__value">${matches[0]}</span>`);
    }

    private keyEscapeHandler(): void {
        this.clearSelection();
        this.reportSelectionMade(null);
    }

    private reportSelectionMade(item: AutoCompleteItem | null): void {
        let code: string | null = null;

        if (item) {
            code = item.value;
        }

        this.$emit('auto-complete-input', code);
    }

    private selectItem(item: AutoCompleteItem): void {
        this.reportSelectionMade(item);
        this.clearSelection();
    }

    private mounted(): void {
        this.focus();
        this.viewportUtil.addScrollHandler(this.calculateDirection);
        this.viewportUtil.addResizeHandler(this.calculateDirection);
        Vue.nextTick(this.calculateDirection);
    }
}
