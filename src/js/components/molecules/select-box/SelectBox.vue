<template>
    <div class="select-box" ref="selectBoxInput" v-click-outside="closeAllCustomSelects">
        <div class="select-custom">
            <div
                @click="toggleCustomSelectVisibility(!showCustomSelect)"
                class="select-selected"
                ref="customSelectTrigger"
            >{{ datasource[selectedItem] }}</div>
            <ul
                :style="`${showCustomSelect ? `height: ${calculatedCustomSelectHeight}px;` : ''} ${reversed ? 'bottom: 0;' : 'top: 0;'}`"
                class="select-items"
                ref="customSelectItems"
            >
                <li
                    :class="key === selectedItem && 'select-item--selected'"
                    :key="uniqId + key + '_select-box'"
                    :value="key"
                    @click="updateSelectedItem(key)"
                    class="select-item"
                    v-for="(value, key) in datasource"
                >{{ value }}</li>
            </ul>
        </div>
        <select :name="name" :value="selectedItem" class="select select-tag" ref="selectBox">
            <option
                :key="uniqId + key + '_select-box'"
                :selected="selectedItem === key"
                :value="key"
                @click="updateSelectedItem(key)"
                v-for="(value, key) in datasource"
            >{{ value }}</option>
        </select>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import ViewportUtil from 'utils/viewport';
import { SelectBoxField } from '@ultimaker/ultimaker.com-model-definitions/dist/molecules/fields/SelectBoxField';
import { SelectBoxItem } from './select-box-item.interface';

interface SelectBoxDataInterface {
    calculatedCustomSelectHeight: number;
    reversed: boolean;
    selectedItem: string;
    showCustomSelect: boolean;
}

export interface SelectBoxEventPayloadInterface {
    name: string;
    value: string;
}

export default Vue.component('SelectBox', {
    props: {
        datasource: {
            type: Object,
            required: true,
        },
        initialItem: {
            type: String,
            required: true,
        },
        label: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        placeholder: {
            type: String,
            required: true,
        },
    },
    data(): SelectBoxDataInterface {
        return {
            calculatedCustomSelectHeight: 0,
            reversed: false,
            selectedItem: this.initialItem,
            showCustomSelect: false,
        }
    },
    computed: {
        viewportUtil: (): ViewportUtil => new ViewportUtil(),
    },
    mounted() {
        delete this.datasource.type;

        this.viewportUtil.addScrollHandler(this.calculateDirection);
        this.viewportUtil.addResizeHandler(this.calculateDirection);
        this.calculateDirection();
        Vue.nextTick(this.calculateCustomSelectHeight);
    },
    watch: {
        selectedItem(): void {
            this.$emitPublic('select-box-input', {
                value: this.selectedItem,
                name: this.name,
            });
            this.closeAllCustomSelects();
        }
    },
    methods: {
        calculateCustomSelectHeight(): void {
            const customSelectList = this.$refs.customSelectItems as HTMLElement;
            const customSelectListItems = customSelectList.querySelectorAll('li');
            const singleItemHeight = (12 * 2) + 24; //2 x 12px padding + 24px lineheight

            this.calculatedCustomSelectHeight = customSelectListItems.length * singleItemHeight;
        },
        calculateDirection(): void {
            if (!this.$refs.customSelectItems) {
                return;
            }

            const inputHeight = 50;
            const windowTop = this.viewportUtil.scrollY;
            const windowBottom = windowTop + this.viewportUtil.screenHeight * (2 / 3);
            const inputBounds = (this.$refs.customSelectItems as HTMLElement).getBoundingClientRect();
            const inputBottom = this.viewportUtil.scrollY + inputBounds.top - inputHeight;
            const inputDropdownBottom = inputBottom + this.calculatedCustomSelectHeight;

            this.reversed = windowBottom < inputDropdownBottom;
        },
        closeAllCustomSelects(): void {
            this.toggleCustomSelectVisibility(false);
        },
        focus(): void {
            if (!this.$refs.selectBox) {
                return;
            }

            if (this.viewportUtil.isTablet) {
                const selectBoxElement = (this.$refs.selectBox as HTMLInputElement);
                selectBoxElement.focus();
                Vue.nextTick(() => selectBoxElement.click());
            } else {
                this.toggleCustomSelectVisibility(true);
            }
        },
        toggleCustomSelectVisibility(newValue): void {
            this.showCustomSelect = newValue;
        },
        updateSelectedItem(key): void {
            this.selectedItem = key;
        },
    }
})
</script>
