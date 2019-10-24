<template>
    <article class="content-block disable-focus" tabIndex="-1">
        <div class="content-block-container__image">
            <c-image class="content-block__image" v-if="image" v-bind="image" keep-in-view></c-image>
        </div>
        <div class="content-block__content">
            <h3 class="content-block__headline">{{ title }}</h3>
            <p class="content-block__description">{{ description }}</p>

            <component v-if="cta" v-bind="cta" :is="cta.type" :class="getClassNames(cta.type)"/>
        </div>
    </article>
</template>

<script lang="ts">
    import Vue from 'vue';

    export default Vue.component('ContentBlock', {
        props: {
            title: {
                type: String,
                required: true,
            },
            description: {
                type: String,
                required: true,
            },
            image: {
                type: Object,
            },
            cta: {
                type: Object,
            },
        },
        methods: {
            getClassNames(type): string {
                return {
                    ContentButton: 'button',
                    ContentLink: 'link link--medium',
                    YoutubeLink: '',
                }[type] || '';
            }
        }
    });
</script>
