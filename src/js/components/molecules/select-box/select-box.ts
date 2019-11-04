import v5 from 'uuid';
import Vue from 'vue';
import BrowserCapabilities from 'utils/browser-capabilities';
import { SelectBoxDataInterface } from './select-box-data-interface';
import { SelectBoxItem } from './select-box-item.interface';

export default Vue.component('SelectBox', {
    props: {
        datasource: {
            required: true,
            type: Object,
        },

        disableSelectBox: {
            default: false,
            required: false,
            type: Boolean,
        },

        initialItemValue: {
            default: '',
            required: false,
            type: String,
        },

        label: {
            required: true,
            type: String,
        },

        name: {
            required: true,
            type: String,
        },

        openDirectionUp: {
            default: false,
            required: false,
            type: Boolean,
        },

        placeholder: {
            required: true,
            type: String,
        },
    },

    data(): SelectBoxDataInterface {
        return {
            highlightedItemValue: this.initialItemValue,
            selectBoxCustomOpen: false,
            selectedItemValue: this.initialItemValue,
            showHtmlSelect: false,
        };
    },

    computed: {
        id(): string {
            return v5();
        },

        items(): SelectBoxItem[] {
            const items = Object.entries(this.datasource).filter(
                ([key]): boolean => key !== 'type',
            );

            items.unshift(['', this.placeholder]);

            return items.map(
                ([key, value]): SelectBoxItem => ({
                    title: `${value}`,
                    value: key,
                }),
            );
        },

        // can be computed because it’s only added to the dom once
        selectBoxCustomTriggerElement(): HTMLElement {
            return this.$refs.selectBoxCustomTrigger as HTMLElement;
        },

        selectedIndex(): number {
            return this.getItemIndexByValue(this.selectedItemValue);
        },
    },

    beforeMount(): void {
        this.showHtmlSelect = BrowserCapabilities.supportsTouch;
    },

    methods: {
        closeSelectBoxCustom(): void {
            this.selectBoxCustomOpen = false;
            this.highlightedItemValue = this.selectedItemValue;
        },

        getItemIndexByValue(value): number {
            return this.items.findIndex((items): boolean => items.value === value);
        },

        async openSelectBoxCustom(): Promise<void> {
            if (this.disableSelectBox) {
                this.selectBoxCustomTriggerElement.blur();

                return;
            }

            this.selectBoxCustomOpen = true;
            this.selectBoxCustomTriggerElement.blur();

            await this.$nextTick();
            this.selectBoxCustomItemsElement().focus();
        },

        // needs to be a method because it gets added/removed from dom
        selectBoxCustomItemsElement(): HTMLElement {
            return this.$refs.selectBoxCustomItems as HTMLElement;
        },

        updateHighlightItem(direction: number): void {
            if (!this.items.length || !this.selectBoxCustomOpen) {
                return;
            }

            const newIndex = this.getItemIndexByValue(this.highlightedItemValue) + direction;

            if (newIndex <= 0) {
                return;
            }

            if (newIndex >= this.items.length) {
                return;
            }

            this.highlightedItemValue = this.items[newIndex].value;
        },

        updateSelectedItemValue(value): void {
            let newValue = '';

            if (value) {
                newValue = value;
            } else {
                newValue = this.highlightedItemValue;
            }

            this.selectedItemValue = newValue;

            this.$emitPublic('select-box-input', {
                value: this.selectedItemValue,
                name: this.name,
            });

            this.closeSelectBoxCustom();
        },
    },
});
