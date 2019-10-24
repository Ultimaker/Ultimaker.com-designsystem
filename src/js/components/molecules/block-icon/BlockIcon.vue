<template>
    <article class="block-icon flexgrid">
        <div class="block-icon__visual flexgrid__cell flexgrid__cell--xxs-4 flexgrid__cell--xs-12">
            <icon v-if="icon" :icon-name="icon" class="block-icon__icon"></icon>
        </div>
        <div class="block-icon__content flexgrid__cell flexgrid__cell--xxs-8 flexgrid__cell--xs-12">
            <h3 class="block-icon__headline">{{ title }}</h3>
            <p class="block-icon__description" v-if="description">{{ description }}</p>
            <component class="block-icon__link" v-if="cta" v-bind="cta" :is="cta.type" :class="getClassNames(cta.type)"/>
        </div>
    </article>
</template>

<script lang="ts">
    import Vue from 'vue';

    export default Vue.component('BlockIcon', {
        props: {
            title: {
                type: String,
                required: true,
            },
            description: {
                type: String,
                required: false,
            },
            icon: {
                type: String,
                required: false,
            },
            cta: {
                type: Object,
                required: false,
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
