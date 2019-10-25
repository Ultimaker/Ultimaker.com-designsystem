<template>
    <article class="hero hero--basic organism">
        <section class="container hero__container">
            <div class="flexgrid flexgrid--gutter flexgrid--column-reversed flexgrid--mobile-xl-row">

                <div class="flexgrid__cell--xs-6">
                    <div class="hero__description">

                        <HeaderBlock class="hero__header header-block--hero">
                            <h1 class='hero__title header-block__title--hero'>{{ title }}</h1>
                            <h2 class="hero__subtitle header-block__subtitle--hero" v-if="subtitle">{{ subtitle }}</h2>
                        </HeaderBlock>

                        <p class="hero__intro copy--intro">{{ description }}</p>

                        <cta-block mod="hero" :ctas="ctas.ctas" v-if="ctas" styleContentButton="button button--primary"
                                   block="hero" />
                    </div>
                </div>
                <div class="flexgrid__cell--xs-6">
                    <div class="hero__image">
                        <template v-if="image">
                            <c-image v-bind="image" keep-in-view />
                        </template>
                    </div>
                </div>
            </div>
        </section>
    </article>
</template>

<script lang="ts">
    import Vue from 'vue';

    export default Vue.component('HeroBasic', {
        props: {
            title: {
                type: String,
                required: true,
            },
            subtitle: {
                type: String,
                required: false,
            },
            description: {
                type: String,
                required: true,
            },
            image: {
                type: Object,
                required: false,
            },
            ctas: {
                type: Object,
                required: false,
            },
        },
    });
</script>
