<template>
    <div class="tooltip" :class="this.classObject">
        <slot/>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.component('Tooltip', {
    props: {
        block: {
            type: String,
            required: false,
            default: '',
        },
    },
    computed: {
        classObject() {
            const classes = {};

            if (this.block) {
                classes[`${this.block}__tooltip`] = true;
            }

            return classes;
        },
    },
});
</script>
