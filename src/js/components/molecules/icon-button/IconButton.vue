<template>
    <button
        class="icon-button"
        :class="buttonClass"
        :aria-label="buttonAriaLabel"
        :aria-disabled="disabled"
        @click="clickHandler"
    >
        <icon class="icon-button__icon" :iconName="iconName"></icon>
        <span class="icon-button__label" v-if="!!this.$slots.default"><slot/></span>
    </button>
</template>

<script lang="ts">
    import Vue from 'vue';

    export default Vue.component('IconButton', {
        props: {
            buttonAriaLabel: {
                type: String,
                default: null,
            },
            buttonClass: {
                type: String,
                default: null,
            },
            disabled: {
                type: Boolean,
                default: false,
            },
            iconName: {
                type: String,
                default: null,
            },
            preventDefault: {
                type: Boolean,
                default: true,
            },
        },
        methods: {
            clickHandler(evt: Event): void {
                if (this.preventDefault) {
                    evt.preventDefault();
                }

                this.$emit('click'); // @todo: phase out use of this emit
                this.$emit('icon-button-click');
            }
        },
    });
</script>
