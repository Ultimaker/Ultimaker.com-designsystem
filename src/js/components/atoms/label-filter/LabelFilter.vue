<template>
    <label class="label-filter">
        <input
            :checked="checked"
            :disabled="disabled"
            :name="name"
            :value="value"
            ref="checkbox"
            type="checkbox"
            @change="onChange"
            v-model="checkedState"
        />
        <span class="label-filter__label">{{ label }}</span>
    </label>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.component('LabelFilter', {
    props: {
        checked: {
            type: Boolean,
            required: false,
            default: false,
        },
        disabled: {
            type: Boolean,
            required: false,
            default: false,
        },
        eventChange: {
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
        value: {
            type: String,
            required: true,
        },
    },
    data() {
        return {
            checkedState: this.checked || false
        }
    },
    methods: {
        onChange: function () {
            this.$emit(this.eventChange, {
                checked: this.checkedState,
                disabled: this.disabled,
                value: this.value,
            });
        }
    }
});
</script>
