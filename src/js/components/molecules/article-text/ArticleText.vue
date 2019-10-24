<template>
    <section class="article-text" v-html="text"></section>
</template>

<script lang="ts">
    import Vue from 'vue';

    export default Vue.component('ArticleText', {
        props: {
            text: {
                type: String,
                required: true,
            },
        },
    });
</script>
