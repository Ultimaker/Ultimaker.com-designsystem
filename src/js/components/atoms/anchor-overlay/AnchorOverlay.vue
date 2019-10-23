<template>
    <a :href="url" class="anchor-overlay hit-area" :title="title" :aria-label="title"></a>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.component('AnchorOverlay', {
    props: {
        title: {
            type: String,
            required: true,
        },
        url: {
            type: String,
            required: true,
        },
    },
})
</script>
