<template>
    <div class="hero-homepage">
        <div class="hero-homepage__content">
            <h1 class="hero-homepage__title">
                {{ title }}
            </h1>
            <picture role="presentation" v-if="image">
                <source :srcset="srcSetWebpPortrait" type="image/webp" media="(orientation: portrait)"/>
                <source :srcset="srcSetWebp" type="image/webp" media="(orientation: landscape)"/>
                <source :srcset="srcSetPortrait" media="(orientation: portrait)"/>
                <source :srcset="srcSet" media="(orientation: landscape)"/>
                <img :src="`${image.url}?w=1920&h=1080&fit=fill`" alt="" class="hero-homepage__image"/>
            </picture>
            <p class="hero-homepage__description" v-if="description">
                {{ description }}
            </p>
            <cta-block :ctas="ctas.ctas" v-if="ctas"/>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import { buildSrcSet } from 'components/organisms/hero-homepage/helpers/build-srcset';

    export default Vue.component('HeroHomepage', {
        props: {
            title: {
                type: String,
                required: true,
            },
            description: {
                type: String,
                required: false,
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
        data() {
            return {
                showVideo: false,
            }
        },
        computed: {
            srcSet(): string {
                if (!this.image) return '';

                const {url, focusArea} = this.image;
                return buildSrcSet({url, focusArea});
            },
            srcSetPortrait(): string {
                if (!this.image) return '';

                const {url, focusArea} = this.image;
                return buildSrcSet({url, focusArea, portrait: true});
            },
            srcSetWebp(): string {
                if (!this.image) return '';

                const {url, focusArea} = this.image;
                return buildSrcSet({url, focusArea, webp: true});
            },
            srcSetWebpPortrait(): string {
                if (!this.image) return '';

                const {url, focusArea} = this.image;
                return buildSrcSet({url, focusArea, webp: true, portrait: true});
            }
        }
    });
</script>
