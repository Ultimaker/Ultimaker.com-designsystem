<template>
    <article class="content-general">
        <section class="content-general__container">
            <div class="flexgrid flexgrid--gutter" :class="{'flexgrid--row-reversed': reversed}">
                <div class="flexgrid__cell--xs-6 content-general__grid-cell content-general__content">
                    <h3 class="content-general__title"> {{ title }}</h3>
                    <div class="content-manageble content-general__body" v-html="description"></div>

                    <component v-if="cta" v-bind="cta" :is="cta.type" :class="getClassNames(cta.type)"/>
                </div>
                <div class="flexgrid__cell--xs-6 content-general__grid-cell content-general__image">
                    <div class="content-general__image-wrapper">
                        <c-image v-if="image" v-bind="image"></c-image>
                    </div>
                </div>
            </div>
        </section>
    </article>
</template>

<script lang="ts">
    import Vue from 'vue';

    export default Vue.component('ContentGeneral', {
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
            reversed: {
                type: Boolean,
                required: true
            },
        },
        methods: {
            getClassNames(type): string {
                return {
                    ContentButton: 'content-general__button button',
                    ContentLink: 'content-general__link link link--medium',
                    YoutubeLink: 'content-general__link link link--medium',
                }[type] || '';
            }
        }
    });
</script>
