<template>
    <div class="article-intro" v-html="intro"></div>

</template>

<script lang="ts">
    import Vue from 'vue';

    export default Vue.component('ArticleIntro', {
        props: {
            intro: {
                type: String,
                required: true,
            },
        },
    });
</script>
