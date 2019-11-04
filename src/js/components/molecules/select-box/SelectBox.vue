<template>
    <div class="select-box">
        <div
            v-if="!showHtmlSelect"
            :aria-label="label"
            class="select-box__custom"
        >
            <div
                :class="disableSelectBox && 'select-box__custom-trigger--disabled'"
                class="select-box__custom-trigger"
                ref="selectBoxCustomTrigger"
                tabindex="0"
                @click="openSelectBoxCustom()"
                @keydown.enter.space="openSelectBoxCustom()"
            >
                {{ items[selectedIndex].title }}
            </div>
            <ul
                v-if="selectBoxCustomOpen"
                :style="openDirectionUp ? 'bottom: 0;' : 'top: 0;'"
                class="select-box__custom-items"
                ref="selectBoxCustomItems"
                role="listbox"
                tabindex="0"
                @blur="closeSelectBoxCustom()"
                @keydown.esc="closeSelectBoxCustom()"
                @keydown.up.prevent="updateHighlightItem(-1)"
                @keydown.down.prevent="updateHighlightItem(1)"
                @keydown.enter.space="updateSelectedItemValue()"
            >
                <li
                    v-for="({title, value}, index) in items"
                    :class="highlightedItemValue === value && 'select-box__custom-item--selected'"
                    :key="`select-box-custom-${index}`"
                    class="select-box__custom-item"
                    role="option"
                    @blur="closeSelectBoxCustom()"
                    @click="updateSelectedItemValue(value)"
                >
                    {{ title }}
                </li>
            </ul>
        </div>
        <select
            v-if="showHtmlSelect"
            :aria-label="label"
            :name="name"
            class="select-box__select"
        >
            <option
                v-for="({title, value}, index) in items"
                :key="`select-box-${index}`"
                :selected="selectedItemValue === value"
                :value="value"
                @click="updateSelectedItemValue(value)"
            >
                {{ title }}
            </option>
        </select>
    </div>
</template>

<script src="./select-box" lang="ts"></script>
