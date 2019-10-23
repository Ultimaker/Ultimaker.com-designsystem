<template>
    <span class="label">{{ item }}</span>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.component('SpanLabel', {
    props: {
        item: {
            type: String,
            required: true,
        },
    },
});
</script>
