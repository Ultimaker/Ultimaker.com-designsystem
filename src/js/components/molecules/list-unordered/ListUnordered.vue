<template>
    <ul class="list">
        <template v-for="(item, index) in listItems.items">
            <template v-if="!item.item"><component :is="listItems.type" :item="item" :key="index"/></template>
            <template v-else-if="listItems.type"><component :is="listItems.type" v-bind="item" :key="index"/></template>
            <template v-else-if="item.type"><component :is="item.type" v-bind="item" :key="index"/></template>
        </template>
    </ul>

</template>

<script lang="ts">
    import Vue from 'vue';

    export default Vue.component('ListUnordered', {
        props: {
            listItems: {
                type: Object,
                required: true,
            },
        },
    });
</script>
