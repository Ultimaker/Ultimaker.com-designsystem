<template>
    <div class="article-video">
        <c-image class="article-video__overlay" v-bind="overlay" v-if="overlay" resize-behaviour="crop" />
        <div class="article-video__overlay--overlay"></div>
        <youtube-link class="article-video__button" v-bind="cta" />
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';

    export default Vue.component('ArticleVideo', {
        props: {
            cta: {
                type: Object,
                required: true,
            },
            overlay: {
                type: Object,
                required: false,
            },
        },
    });
</script>
