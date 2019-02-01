/* eslint-disable complexity */
import { Vue, Component, Prop, Watch } from 'vue-property-decorator';
import _filter from 'lodash/filter';
import _find from 'lodash/find';
import ViewportUtil from 'utils/viewport';

import { AutoCompleteField } from "@ultimaker/ultimaker.com-model-definitions/dist/molecules/fields/AutoCompleteField";

@Component({
    name: 'auto-complete',
    template: require('./auto-complete.html'),
})

export default class AutoComplete extends Vue implements AutoCompleteField {
    @Prop({ type: String, default: () => `autocomplete${ ~~(Math.random() * 10000) }` }) inputId!: string;
    @Prop({ type: Object, default: null }) value!: object;
    @Prop({ type: Boolean, default: null }) defaultOpen!: boolean;
    @Prop({ type: Array, default: () => [] }) items!: [];
    @Prop({ type: Number, default: 3 }) minChar!: number;
    @Prop({ type: String, default: '' }) titleField!: string;
    @Prop({ type: String, default: '' }) valueField!: string;
    @Prop({ type: Array, default: () => [] }) storedItems!: [];
    @Prop({ type: String, default: '' }) storedLabel!: string;
    @Prop({ type: Boolean, default: false }) required!: boolean;

    // Model Definitions
    @Prop({ type: String, default: null }) label!: AutoCompleteField['label'];
    @Prop({ type: String, default: null }) placeholder!: AutoCompleteField['placeholder'];
    @Prop({ type: String, default: null }) highlightedLabel!: AutoCompleteField['highlightedLabel'];
    @Prop({ type: String, default: '' }) suggestionsLabel!: AutoCompleteField['suggestionsLabel'];
    @Prop({ type: String, default: '' }) datasource!: AutoCompleteField['datasource'];

    input: string =  '';
    selectedItem: boolean | null = null;
    selectedIndex: number = 0;
    reversed: boolean = false;
    forceOpen: boolean = false;
    viewportUtil =  new ViewportUtil();

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
        return !(this.selectedItem === null || this.input !== this.selectedItem[this.titleField]);
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

    get suggestedItems(): [] | null {
        const filterMatch = new RegExp(this.input, 'i');
        // @ts-ignore
        const filteredItems = _filter(this.items, item => !this.storedItems || !this.storedItems.includes(item));
        const allSuggestedTitles = _filter(filteredItems, item => filterMatch.test(item[this.titleField]));
        const allSuggestedValues = _filter(filteredItems, item => filterMatch.test(item[this.valueField]));

        if (this.matchValue) {
            return allSuggestedValues;
        } else if (this.matchTitle) {
            return allSuggestedTitles;
        }

        return null;
    }

    init(): void {
        this.forceOpen = this.defaultOpen;
        this.viewportUtil.addScrollHandler(this.calculateDirection);
        this.viewportUtil.addResizeHandler(this.calculateDirection);
        if (this.value && this.value[this.titleField]) {
            this.input = this.value[this.titleField];
        }

        Vue.nextTick(this.calculateDirection);
    }

    calculateDirection(): any | void {
        if (!this.$refs.autoComplete) { return; }
        const windowTop = this.viewportUtil.scrollY;
        const windowBottom = windowTop + (this.viewportUtil.screenHeight * (2 / 3));
        // @ts-ignore
        const inputBounds = this.$refs.autoComplete.getBoundingClientRect();
        const inputTop = this.viewportUtil.scrollY + inputBounds.top;
        const inputBottom = inputTop + inputBounds.height;

        this.reversed = windowBottom < inputBottom;
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
            // @ts-ignore
            this.$refs.autoComplete.focus();
        }
    }

    selectItem(item): void {
        this.input = item[this.titleField] || '';
        this.selectedItem = item;
        this.forceOpen = false;
        this.resetIndex();
        this.focus();
        this.$emit('input', item);
    }

    selectItemByInput(): void {
        const matcher = new RegExp(`^${ this.input }$`, 'i');
        let item = null;

        if (this.input.length >= this.minChar) {
            item = _find(this.items, i => matcher.test(i[this.titleField]));
        } else if (this.input.length === this.minChar - 1) {
            item = _find(this.items, i => matcher.test(i[this.valueField]));
        }

        if (item) {
            this.selectItem(item);
        }
    }

    selectCurrent(): void | any {
        const listItems = this.$el.querySelectorAll('.auto-complete__list-item');

        if (!listItems.length) {
            if (!this.input.length) {
                this.$emit('changeFocus');
            }

            return;
        }

        if (listItems.length > this.selectedIndex) {
            // @ts-ignore
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
            this.input = newValue[this.titleField];
        }
        this.selectedItem = newValue;
    }

    @Watch('input')
    onInput(newValue): void {
        if (this.selectedItem !== null && newValue !== this.selectedItem[this.titleField]) {
            this.selectedItem = null;
        }
        this.resetIndex();
    }

    @Watch('selectedIndex')
    onSelectedIndex(): void {
        const listItems = this.$el.querySelectorAll('.auto-complete__list-item');

        if (!listItems) { return; }

        const lastIndex = listItems.length - 1;

        if (this.selectedIndex > lastIndex) {
            this.selectedIndex = 0;
        } else if (this.selectedIndex < 0) {
            this.selectedIndex = lastIndex;
        }

        if (listItems.length > this.selectedIndex) {
            // @ts-ignore
            listItems[this.selectedIndex].focus();
        }
    }

    beforeMount(): void {
        this.init();
    }
}
