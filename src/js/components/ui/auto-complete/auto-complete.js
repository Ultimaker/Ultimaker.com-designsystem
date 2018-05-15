/* eslint-disable complexity */

import Vue from 'vue';
import _filter from 'lodash/filter';
import _find from 'lodash/find';

export default Vue.component('auto-complete', {
    name: 'auto-complete',
    template: require('./auto-complete.html'),
    data: () => {
        return {
            input: '',
            forceOpen: false,
            selectedItem: null,
            selectedIndex: 0
        };
    },
    props: {
        inputId: {
            type: String,
            default: () => `autocomplete${ ~~(Math.random() * 10000) }`
        },
        value: {
            type: Object,
            default: null
        },
        placeholder: {
            type: String,
            default: null
        },
        items: {
            type: Array,
            default: () => []
        },
        minChar: {
            type: Number,
            default: 3
        },
        titleField: {
            type: String,
            default: 'title'
        },
        valueField: {
            type: String,
            default: 'value'
        },
        storedItems: {
            type: Array,
            default: () => []
        },
        storedLabel: {
            type: String,
            default: 'Detected'
        },
        suggestionsLabel: {
            type: String,
            default: 'Suggestions'
        },
        required: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        listId() {
            return `${ this.inputId }__dropdown`;
        },
        hasInput() {
            return this.input.length > 0;
        },
        matchTitle() {
            return this.hasInput && this.input.length >= this.minChar;
        },
        matchValue() {
            return this.hasInput && this.input.length === this.minChar -1;
        },
        hasItems() {
            return Array.isArray(this.items) && this.items.length > 0;
        },
        isValid() {
            return !(this.selectedItem === null || this.input !== this.selectedItem[this.titleField]);
        },
        isOpen() {
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
        },
        suggestedItems() {
            const filterMatch = new RegExp(this.input, 'i'),
                filteredItems = _filter(this.items, (item) => !this.storedItems || !this.storedItems.includes(item)),
                allSuggestedTitles = _filter(filteredItems, (item) => filterMatch.test(item[this.titleField])),
                allSuggestedValues = _filter(filteredItems, (item) => filterMatch.test(item[this.valueField]));

            if (this.matchValue) {
                return allSuggestedValues;
            } else if (this.matchTitle) {
                return allSuggestedTitles;
            }

            return null;
        }
    },
    methods: {
        highlightString(data) {
            const stringToReplace = new RegExp(this.input, 'i'),
                matches = data.match(stringToReplace);

            if (!matches) {
                return data;
            }

            return data.replace(stringToReplace, `<span class="auto-complete__value">${ matches[0] }</span>`);
        },
        resetInput() {
            this.selectedIndex = 0;
            if (this.input === '') {
                this.$emit('close');
            }
            this.input = '';
        },
        resetIndex() {
            this.selectedIndex = 0;
        },
        focus() {
            if (this.hasItems) {
                this.$refs.autoComplete.focus();
            }
        },
        selectItem(item) {
            this.input = item[this.titleField] || '';
            this.selectedItem = item;
            this.forceOpen = false;
            this.resetIndex();
            this.focus();
            this.$emit('input', item);
        },
        selectItemByInput() {
            const matcher = new RegExp(`^${ this.input }$`, 'i');
            let item = null;

            if (this.input.length >= this.minChar) {
                item = _find(this.items, i => matcher.test(i[this.titleField]));
            } else if (this.input.length === this.minChar -1) {
                item = _find(this.items, i => matcher.test(i[this.valueField]));
            }

            if (item) {
                this.selectItem(item);
            }
        },
        selectCurrent() {
            const listItems = this.$el.querySelectorAll('.auto-complete__list-item');

            if (!listItems.length) {
                if (!this.input.length) {
                    this.$emit('fauxBlurInput');
                }

                return;
            }

            if (listItems.length > this.selectedIndex) {
                listItems[this.selectedIndex].focus();
            }
        },
        selectNext() {
            if (!this.hasInput) { return; }
            this.selectedIndex++;
        },
        selectPrevious() {
            if (!this.hasInput) { return; }
            this.selectedIndex--;
        },
        closeList() {
            this.selectedIndex = 0;
            Vue.nextTick(this.focus);
        }
    },
    watch: {
        value(newValue) {
            if (newValue !== null) {
                this.input = newValue[this.titleField];
            }
            this.selectedItem = newValue;
        },
        input(newValue) {
            if (this.selectedItem !== null && newValue !== this.selectedItem[this.titleField]) {
                this.selectedItem = null;
            }
            this.resetIndex();
        },
        selectedIndex() {
            const listItems = this.$el.querySelectorAll('.auto-complete__list-item');

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
    },
    beforeMount() {
        if (this.value && this.value[this.titleField]) {
            this.input = this.value[this.titleField];
        }
    }
});
