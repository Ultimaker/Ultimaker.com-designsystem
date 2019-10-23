<template>
    <ul :class="block + '__list'">
        <li v-for="link in links" :class="block + '__item'">
            <content-link :class="link.class" :block='block' :icon="link.icon" :url="link.url" :label="link.label"></content-link>
        </li>
    </ul>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.component('ContentLinkList', {
    props: {
        block: {
            type: String,
            required: true,
        },
        links: {
            type: Array,
            required: true,
            default: []
        },
    }
});
</script>
