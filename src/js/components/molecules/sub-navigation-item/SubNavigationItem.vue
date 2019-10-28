<template>
    <base-link :url="url" class="subnavigation__link link link--reversed">
        <div class="subnavigation__image-container">
            <c-image v-if="image" v-bind="image" keep-in-view></c-image>
        </div>
        <div class="subnavigation__label" :aria-label="label" >
            <span class="link__underline">
                {{label}}
            </span>
        </div>
    </base-link>
</template>

<script lang="ts">
    import Vue from 'vue';

    export default Vue.component('SubNavigationItem', {
        props: {
            url: {
                type: String,
                required: true,
            },
            image: {
                type: Object,
            },
            label: {
                type: String,
                required: true,
            },
        },
    });
</script>
