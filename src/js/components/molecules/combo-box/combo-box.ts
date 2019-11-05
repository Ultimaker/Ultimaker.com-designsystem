import Vue from 'vue';
import Defaults from '../../../constants/defaults';
import escapeStringRegexp from 'escape-string-regexp';
import InView from 'js/mixins/in-view';
import v5 from 'utils/uuid';
import ViewportUtil from '../../../utils/viewport';
import { ComboBoxItem } from './combo-box-item.interface';
import { ComboBoxDataInterface } from 'components/molecules/combo-box/combo-box-data-interface';

export default Vue.component('ComboBox', {
    mixins: [InView],
    props: {
        datasource: {
            required: true,
            type: Object,
        },
        label: {
            required: false,
            type: String,
            default: '',
        },
        notFoundLabel: {
            required: false,
            type: String,
            default: '',
        },
        placeholder: {
            required: false,
            type: String,
            default: '',
        },
        selected: {
            required: false,
            type: String,
            default: '',
        },
    },
    data(): ComboBoxDataInterface {
        return {
            comboBoxHeight: null,
            initiated: false,
            input: '',
            inputHeight: null,
            inputPlaceholder: '',
            isReversed: false,
            listBoxElement: null,
            listBoxHeight: null,
            listBoxItemHeight: null,
            listBoxStyles: {},
            maxMultiplier: 4,
            removeObserverWhenInView: false,
            selectedItem: null,
            selectedIndex: -1,
            showListBox: false,
            viewportUtil: new ViewportUtil(),
        };
    },
    computed: {
        comboBoxItems(): ComboBoxItem[] {
            const filteredItems = Object.entries(this.datasource).filter(
                ([key]): boolean => key !== 'type',
            );

            return filteredItems.map(
                ([key, value]): ComboBoxItem => ({
                    title: `${value} - ${key}`,
                    value: key,
                }),
            );
        },
        id(): string {
            return v5();
        },
        items(): ComboBoxItem[] {
            return this.filterItemsTitleByString(this.input);
        },
        comboBoxElement(): HTMLElement {
            return this.$refs.comboBox as HTMLElement;
        },
        inputElement(): HTMLElement {
            return this.$refs.input as HTMLElement;
        },
    },
    watch: {
        inView(newValue: boolean): void {
            if (newValue) {
                this.viewportUtil.addScrollHandler(this.calculateDirection);
                this.viewportUtil.addResizeHandler(this.resizeHandler);
            } else {
                this.viewportUtil.removeScrollHandler(this.calculateDirection);
                this.viewportUtil.removeResizeHandler(this.resizeHandler);
            }
        },
        isReversed(newValue: boolean): void {
            if (newValue) {
                // update default list box styles
                this.listBoxStyles = {
                    position: 'absolute',
                    bottom: this.inputHeight,
                    height: this.listBoxHeight ? `${this.listBoxHeight}px` : 'auto',
                };
            } else {
                this.listBoxStyles = {
                    height: this.listBoxHeight ? `${this.listBoxHeight}px` : 'auto',
                };
            }
        },
        items(): void {
            this.setMaxMultiplier();
            this.setListBoxHeight();
            this.setComboBoxHeight();
            this.calculateDirection();
        },
    },
    beforeMount(): void {
        if (this.selected && this.datasource[this.selected]) {
            this.input = this.datasource[this.selected];
        }
    },
    created(): void {
        this.inputPlaceholder = this.placeholder;
    },
    methods: {
        calculateDirection(): void {
            if (this.comboBoxHeight === null) {
                return;
            }

            const windowScrollY = this.viewportUtil.scrollY;
            const windowBottom = windowScrollY + this.viewportUtil.screenHeight;
            const comboBoxBounds = this.comboBoxElement.getBoundingClientRect();
            const comboBoxTop = windowScrollY + comboBoxBounds.top;

            this.isReversed = (windowBottom - this.comboBoxHeight) < comboBoxTop;
        },
        clear(): void {
            if (this.selectedItem && this.selectedItem.value && this.datasource[this.selectedItem.value]) {
                this.input = this.datasource[this.selectedItem.value];
            } else if (this.selected && this.datasource[this.selected]) {
                this.input = this.datasource[this.selected];
            }

            this.inputElement.blur();

            this.showListBox = false;
            this.selectedIndex = -1;
            this.selectedItem = null;
        },
        clickOutsideHandler(): void {
            if (!this.showListBox) {
                return;
            }

            this.clear();
        },
        emitEvent(value: string | null): void {
            this.$emitPublic('combo-box-changed', value);
        },
        filterItemsTitleByString(string: string): ComboBoxItem[] {
            return this.comboBoxItems.filter((item: ComboBoxItem): boolean => new RegExp(escapeStringRegexp(string), 'i').test(item.title));
        },
        async focusHandler(): Promise<void> {
            this.showListBox = true;

            if (!this.initiated) {
                await this.$nextTick((): void => {
                    this.listBoxElement = this.$refs.listBox as HTMLElement;

                    this.init();
                });
            }

            if (this.input && this.input.length) {
                this.input = '';
            }
        },
        highlightItem(direction: number): void {
            if (!this.items.length) {
                return;
            }

            this.selectedIndex = this.selectedIndex + direction;

            if (this.selectedIndex > this.items.length - 1) {
                this.selectedIndex = 0;
            }

            if (this.selectedIndex < 0) {
                this.selectedIndex = this.items.length - 1;
            }

            const listBoxItem: HTMLElement = this.$refs[`listBoxItem-${this.selectedIndex}`][0] as HTMLElement;

            listBoxItem.focus();
        },
        highlightString(data: string): string {
            const stringToReplace = new RegExp(escapeStringRegexp(this.input), 'i');
            const matches = data.match(stringToReplace);

            if (!matches) {
                return data;
            }

            return data.replace(stringToReplace, `<span class="hightlighted">${matches[0]}</span>`);
        },
        init(): void {
            this.inputHeight = `${this.inputElement.offsetHeight}px`;

            const listBoxItem: HTMLElement = this.$refs['listBoxItem-0'][0] as HTMLElement;

            this.listBoxItemHeight = listBoxItem.offsetHeight;

            this.setMaxMultiplier();
            this.setListBoxHeight();
            this.setComboBoxHeight();
            this.calculateDirection();

            this.initiated = true;
        },
        inputHandler(value: string): void {
            this.showListBox = !!value;

            if (this.selectedIndex !== -1) {
                this.selectedIndex = -1;
            }
        },
        keyBackSpaceHandler(): void {
            if (this.input.length) {
                return;
            }

            this.clear();
        },
        keyEnterHandler(): void {
            if (!this.items.length) {
                return;
            }

            if (!this.items[this.selectedIndex]) {
                return;
            }

            this.selectItem(this.items[this.selectedIndex]);
        },
        keyEscapeHandler(): void {
            this.clear();
        },
        resizeHandler(): void {
            this.setMaxMultiplier();
            this.setListBoxHeight();
            this.setComboBoxHeight();
            this.calculateDirection();
        },
        selectItem(item: ComboBoxItem): void {
            this.selectedItem = item;
            this.input = this.datasource[this.selectedItem.value];
            this.inputPlaceholder = this.datasource[this.selectedItem.value];

            this.emitEvent(this.selectedItem.value);

            this.clear();
        },
        setComboBoxHeight(): void {
            // the comboBoxHeight is depended on the listBoxHeight
            if (!this.listBoxHeight) {
                return;
            }

            this.comboBoxHeight = (this.comboBoxElement.getBoundingClientRect().height + this.listBoxHeight);
        },
        setListBoxHeight(): void {
            if (!this.listBoxItemHeight) {
                return;
            }

            let amount: number = this.items.length;

            if (amount > this.maxMultiplier) {
                amount = this.maxMultiplier;
            } else if (amount === 0) {
                amount = 1;
            }

            // recalculate the list-box height
            this.listBoxHeight = this.listBoxItemHeight * amount;

            // update the list box styles
            this.listBoxStyles = {
                height: `${this.listBoxHeight}px`,
            };
        },
        setMaxMultiplier(): void {
            if (!this.viewportUtil) {
                return;
            }

            if (this.viewportUtil.screenWidth >= Defaults.breakpoints.tablet.max) {
                this.maxMultiplier = 8;
            } else {
                this.maxMultiplier = 4;
            }
        },
    },
});
