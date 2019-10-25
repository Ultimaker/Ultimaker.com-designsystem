<template>
    <article class="hero hero--cover organism">
        <div class="hero-cover__image--full">
            <c-image v-if="this.image" v-bind="this.image" resize-behavior="fill"/>
        </div>

        <div class="hero-cover__image--overlay"></div>
        <section class="hero-cover__container container">
            <div class="flexgrid__cell--xs-6 hero--cover-reset">
                <h1 class="hero-cover__headline">{{ title }}</h1>
                <p class="copy--intro" v-if="description">{{ description }}</p>
                <cta-block mod="hero" :ctas="ctas.ctas" v-if="ctas" styleContentButton="button button--primary"/>
            </div>
        </section>
    </article>
</template>

<script lang="ts">
    import Vue from 'vue';

    export default Vue.component('HeroCover', {
        props: {
            title: {
                type: String,
                required: true,
            },
            description: {
                type: String,
                required: true,
            },
            ctas: {
                type: Object,
                required: false,
            },
            image: {
                type: Object,
                required: false,
            },
        },
        data() {
            return {
                showVideo: false,
            }
        },
        methods: {
            toggleVideo(): void {
                this.showVideo = !this.showVideo;
            }
        }
    });
</script>
