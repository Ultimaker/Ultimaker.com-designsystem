<template>
    <div>
        <h1 class='hero__title header-block__title--hero'>{{ title }}</h1>
        <h2 class="hero__subtitle header-block__subtitle--hero" v-if="subtitle">{{ subtitle }}</h2>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';

    export default Vue.component('HeroHeading', {
        props: {
            title: {
                type: String,
                required: true,
            },
            subtitle: {
                type: String,
                required: false,
            },
        },
    });
</script>
