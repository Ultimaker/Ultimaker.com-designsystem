<template>
    <section class="article-table" v-html="table" />
</template>

<script lang="ts">
    import Vue from 'vue';

    export default Vue.component('ArticleTable', {
        props: {
            table: {
                type: String,
                required: true,
            },
        },
    });
</script>
