import { Vue, Component, Prop, Watch } from 'vue-property-decorator';
import ViewportUtil from 'utils/viewport';

import { AutoCompleteItem, AutoCompleteProps } from './auto-complete.models';

@Component({
    name: 'auto-complete',
    template: require('./auto-complete.vue.html'),
})

export default class AutoComplete extends Vue implements AutoCompleteProps {
    @Prop({ type: String, default: () => `autocomplete${ ~~(Math.random() * 10000) }` }) inputId!: string;
    @Prop({ type: Object, default: null }) value!: AutoCompleteItem;
    @Prop({ type: Boolean, default: null }) defaultOpen!: boolean;
    @Prop({ type: Number, default: 3 }) minChar!: number;
    @Prop({ type: Array, default: () => [] }) storedItems!: AutoCompleteItem[];
    @Prop({ type: String, default: '' }) storedLabel!: string;
    @Prop({ type: Boolean, default: false }) required!: boolean;

    // Model Definitions
    @Prop({ type: String, default: null }) label!: AutoCompleteProps['label'];
    @Prop({ type: String, default: null }) placeholder!: AutoCompleteProps['placeholder'];
    @Prop({ type: String, default: null }) highlightedLabel!: AutoCompleteProps['highlightedLabel'];
    @Prop({ type: String, default: '' }) suggestionsLabel!: AutoCompleteProps['suggestionsLabel'];
    @Prop({ required: true }) datasource!: AutoCompleteProps['datasource'];

    input: string =  '';
    selectedItem: AutoCompleteItem | null = null;
    selectedIndex: number = 0;
    reversed: boolean = false;
    forceOpen: boolean = false;
    viewportUtil =  new ViewportUtil();

    $refs!: {
        autoComplete: AutoComplete,
    };

    get items():AutoCompleteItem[] {
        const items: AutoCompleteItem[] = [];

        if (!this.datasource) {
            return items;
        }

        Object.keys(this.datasource)
            .forEach((key) => {
                items.push({
                    title: this.datasource[key],
                    value: key,
                });
            });

        return items;
    }
    get classObject(): object {
        return {
            required: this.required,
            'auto-complete--reversed': this.reversed,
        };
    }

    get listId(): string {
        return `${ this.inputId }__dropdown`;
    }
    get hasInput(): boolean {
        return this.input.length > 0;
    }
    get matchTitle(): boolean {
        return this.hasInput && this.input.length >= this.minChar;
    }
    get matchValue(): boolean {
        return this.hasInput && this.input.length === this.minChar - 1;
    }
    get hasItems(): boolean {
        return Array.isArray(this.items) && this.items.length > 0;
    }
    get isValid(): boolean {
        return !(this.selectedItem === null || this.input !== this.selectedItem.title);
    }
    get isOpen(): boolean {
        if (!(this.storedItems && this.storedItems.length) && !(this.suggestedItems && this.suggestedItems.length)) {
            return false;
        }

        if (this.forceOpen) {
            return true;
        }

        if (this.hasInput && !this.isValid) {
            return true;
        }

        return this.hasInput && this.hasItems && !this.isValid;
    }

    get suggestedItems(): AutoCompleteItem[] {
        const filterMatch = new RegExp(this.input, 'i');
        let filteredItems:AutoCompleteItem[] = [];

        if (this.storedItems) {
            filteredItems = this.items.filter(item => !this.storedItems.find(i => i.value === item.value));
        }
        const allSuggestedTitles = filteredItems.filter(item => filterMatch.test(item.title));
        const allSuggestedValues = filteredItems.filter(item => filterMatch.test(item.value));

        if (this.matchValue) {
            return allSuggestedValues;
        }

        if (this.matchTitle) {
            return allSuggestedTitles;
        }

        return [];
    }

    init(): void {
        this.forceOpen = this.defaultOpen;
        this.viewportUtil.addScrollHandler(this.calculateDirection);
        this.viewportUtil.addResizeHandler(this.calculateDirection);
        if (this.value && this.value.title) {
            this.input = this.value.title;
        }

        Vue.nextTick(this.calculateDirection);
    }

    @Watch('isOpen')
    calculateDirection():undefined {
        if (!this.$refs.autoComplete) {
            return;
        }
        const windowTop = this.viewportUtil.scrollY;
        const windowBottom = windowTop + (this.viewportUtil.screenHeight * (2 / 3));
        // @ts-ignore, exist  by default on html elements
        const inputBounds = this.$refs.autoComplete.getBoundingClientRect();
        const inputTop = this.viewportUtil.scrollY + inputBounds.top;
        const inputBottom = inputTop + inputBounds.height;

        this.reversed = windowBottom < inputBottom;
        return;
    }

    highlightString(data): string {
        const stringToReplace = new RegExp(this.input, 'i');
        const matches = data.match(stringToReplace);

        if (!matches) {
            return data;
        }

        return data.replace(stringToReplace, `<span class="auto-complete__value">${ matches[0] }</span>`);
    }

    resetInput(): void {
        this.selectedIndex = 0;
        if (this.input === '') {
            this.$emit('close');
        }
        this.input = '';
    }

    resetIndex(): void {
        this.selectedIndex = 0;
    }

    focus(): void {
        if (this.hasItems) {
            this.$refs.autoComplete.focus();
        }
    }

    selectItem(item): void {
        this.input = item.title || '';
        this.selectedItem = item;
        this.forceOpen = false;
        this.resetIndex();
        this.focus();
        this.$emit('input', item);
    }

    selectItemByInput(): void {
        const matcher = new RegExp(`^${ this.input }$`, 'i');
        let item:AutoCompleteItem | undefined;

        if (this.input.length >= this.minChar) {
            item = this.items.find(i => matcher.test(i.title));
        } else if (this.input.length === this.minChar - 1) {
            item = this.items.find(i => matcher.test(i.value));
        }

        if (item) {
            this.selectItem(item);
        }
    }

    selectCurrent(): void | any {
        const listItems = this.$el.querySelectorAll('.auto-complete__list-item') as NodeListOf<HTMLElement>;

        if (!listItems.length) {
            if (!this.input.length) {
                this.$emit('changeFocus');
            }

            return;
        }

        if (listItems.length > this.selectedIndex) {
            listItems[this.selectedIndex].focus();
        }
    }

    selectNext(): void {
        if (!this.hasInput) { return; }
        this.selectedIndex = this.selectedIndex + 1;
    }

    selectPrevious(): void {
        if (!this.hasInput) { return; }
        this.selectedIndex = this.selectedIndex - 1;
    }

    closeList(): void {
        this.selectedIndex = 0;
        Vue.nextTick(this.focus);
    }

    @Watch('value')
    onValue(newValue): void {
        if (newValue !== null) {
            this.input = newValue.title;
        }
        this.selectedItem = newValue;
    }

    @Watch('input')
    onInput(newValue): void {
        if (this.selectedItem !== null && newValue !== this.selectedItem.title) {
            this.selectedItem = null;
        }
        this.resetIndex();
    }

    @Watch('selectedIndex')
    onSelectedIndex(): void {
        const listItems = this.$el.querySelectorAll('.auto-complete__list-item') as NodeListOf<HTMLElement>;

        if (!listItems) { return; }

        const lastIndex = listItems.length - 1;

        if (this.selectedIndex > lastIndex) {
            this.selectedIndex = 0;
        } else if (this.selectedIndex < 0) {
            this.selectedIndex = lastIndex;
        }

        if (listItems.length > this.selectedIndex) {
            listItems[this.selectedIndex].focus();
        }
    }

    beforeMount(): void {
        this.init();
    }
}
