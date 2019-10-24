<template>
    <figure class="article-image">
        <div class="article-image__container">
            <c-image class="article-image__image" v-bind="image" v-if="image" resize-behaviour="crop"></c-image>
        </div>
        <figcaption class="article-image__caption" v-if="caption">{{ caption }}</figcaption>
    </figure>
</template>

<script lang="ts">
    import Vue from 'vue';

    export default Vue.component('ArticleImage', {
        props: {
            image: {
                type: Object,
                required: false,
            },
            caption: {
                type: String,
                required: false,
            },
        },
    });
</script>
