<template>
    <div
        :id="id + '-combobox'"
        ref="comboBox"
        v-click-outside="clickOutsideHandler"
        :class="{ 'combo-box--reversed': isReversed, 'combo-box--list-box-hidden': !showListBox }"
        class="combo-box"
        aria-expanded="false"
        :aria-owns="id + '-listbox'"
        aria-haspopup="listbox"
        @keydown.esc="keyEscapeHandler"
        @keydown.up.prevent="highlightItem(-1)"
        @keydown.down.prevent="highlightItem(1)"
    >
        <label
            v-if="label"
            :id="`${id}-label`"
            class="combo-box__label"
            :for="`${id}-input`"
        >
            {{ label }}
        </label>
        <div class="combo-box__input-wrapper">
            <input
                :id="`${id}-input`"
                class="combo-box__input"
                ref="input"
                v-model="input"
                :placeholder="inputPlaceholder"
                tabindex="1"
                type="text"
                autocomplete="off"
                aria-autocomplete="list"
                :aria-controls="`${id}-listbox`"
                aria-activedescendant="listBoxItem-0"
                @input="inputHandler"
                @focus.self="focusHandler"
                @keyup.backspace="keyBackSpaceHandler"
            >
        </div>
        <ul
            v-if="showListBox"
            :id="`${id}-listbox`"
            ref="listBox"
            :aria-labelledby="`${id}-label`"
            role="listbox"
            :class="{ 'hidden': false }"
            class="list-box"
            :style="listBoxStyles"
            @keydown.up.prevent
            @keydown.down.prevent
        >
            <li
                v-for="(item, index) in items"
                v-html="highlightString(item.title)"
                :id="`list-box-item-${index}`"
                :key="`list-box-item-${index}`"
                :ref="`listBoxItem-${index}`"
                :class="{ 'list-box__item--selected': item === selectedItem }"
                class="list-box__item"
                role="option"
                :tabindex="index + 2"
                @focus="selectedIndex = index"
                @click.self="selectItem(item)"
                @keydown.enter.space="selectItem(item)"
            ></li>
            <li
                v-if="!items.length"
                aria-disabled="true"
                class="list-box__item list-box__item--disabled"
            >
                {{ notFoundLabel }}
            </li>
        </ul>
    </div>
</template>

<script src="./combo-box.ts" lang="ts"></script>
