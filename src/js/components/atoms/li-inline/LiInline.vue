<template>
    <li class="list__item list__item--inline">
        <template v-if="!item.item">{{ item }}</template>
        <template v-else><component :is="item.type" v-bind="item.item"/></template>
    </li>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.component('LiInline', {
    props: {
        item: {
            type: [String, Object],
            required: true,
        },
    },
});
</script>
