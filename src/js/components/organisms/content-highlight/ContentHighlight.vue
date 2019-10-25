<template>
    <article class="organism content-highlight">
        <section class="container content-highlight__container">
            <div class="flexgrid" :class="{'flexgrid--row-reversed': reversed}">
                <div class="flexgrid__cell--xs-6 content-highlight__grid-cell content-highlight__image">
                    <div class="content-highlight__image-wrapper">
                        <c-image v-if="image" v-bind="image"></c-image>
                    </div>
                </div>
                <div class="flexgrid__cell--xs-6 content-highlight__grid-cell content-highlight__content">
                    <header-block class="content-highlight-header" :title="title" :subtitle="subtitle" />
                    <div class="content-manageble content-highlight__body" v-html="description"></div>
                    <footer-block class="content-highlight-footer" :ctas="ctas" />
                </div>
            </div>
        </section>
    </article>
</template>

<script lang="ts">
    import Vue from 'vue';

    export default Vue.component('ContentHighlight', {
        props: {
            title: {
                type: String,
                required: true,
            },
            subtitle: {
                type: String,
            },
            description: {
                type: String,
            },
            image: {
                type: Object,
            },
            cta: {
                type: Object,
            },
            reversed: {
                type: Boolean,
                required: true
            },
        },
    });
</script>
