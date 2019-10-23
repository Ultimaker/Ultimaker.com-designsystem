<template>
    <svg class="icon" :class="this.iconClass">
        <use :xlink:href="this.iconHref"></use>
    </svg>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.component('Icon', {
    props: {
        iconName: {
            type: String,
            required: true,
        },
    },
    computed: {
        iconClass: function(): string {
            return `icon--${this.iconName}`;
        },
        iconHref(): string {
            return `#icon-${this.iconName}`;
        },
    }
});
</script>
