<template>
    <article class="hero hero--article organism">
        <div class="hero-article__image--full">
            <c-image v-if="this.image" v-bind="this.image" resize-behavior="fill"/>
        </div>

        <div class="hero-article__image--overlay"></div>
        <section class="hero-article__container container">
            <div class="flexgrid__cell--xs-12 hero--article-reset">
                <header-block class="hero__article-header header-block--hero">
                    <HeroHeading :title="title" :subtitle="subtitle"/>
                </header-block>
            </div>
        </section>
    </article>

</template>

<script lang="ts">
    import Vue from 'vue';

    export default Vue.component('HeroArticle', {
        props: {
            title: {
                type: String,
                required: true,
            },
            subtitle: {
                type: String,
                required: false,
            },
            image: {
                type: Object,
                required: true,
            },
        },
    });
</script>
