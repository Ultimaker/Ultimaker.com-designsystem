<template>
    <article class="content-cover content-cover--cover">
        <c-image v-if="this.image" v-bind="this.image"/>

        <div class="content-cover__image--overlay"></div>

        <section class="content-cover__container">
            <div class="flexgrid__cell--xs-6 content-cover-content content-cover--cover-reset">
                <h3 class="content-cover__title">{{ title }}</h3>
                <p class="content-cover__description">{{ description }}</p>
                <div>
                    <component v-if="cta" v-bind="cta" :is="cta.type" :class="getClassNames(cta.type)"/>
                </div>
            </div>
        </section>
    </article>
</template>

<script lang="ts">
    import Vue from 'vue';

    export default Vue.component('ContentCover', {
        props: {
            title: {
                type: String,
                required: true,
            },
            description: {
                type: String,
                required: true
            },
            cta: {
                type: Object,
            },
            image: {
                type: Object,
            },
        },
        methods: {
            getClassNames(type: string): string {
                return {
                    ContentButton: 'content-cover__button button',
                    ContentLink: 'content-cover__link link link--medium',
                    YoutubeLink: 'content-cover__link link link--medium',
                }[type] || '';
            }
        }
    });
</script>
