<template>
    <header class="header-block">
        <slot>
            <h2 class="header-block__title" v-if="title">{{ title }}</h2>
            <p class="header-block__subtitle" v-if="subtitle">{{ subtitle }}</p>
        </slot>
    </header>
</template>

<script lang="ts">
    import Vue from 'vue';

    export default Vue.component('HeaderBlock', {
        props: {
            title: {
                type: String,
            },
            subtitle: {
                type: String,
            },
        },
    });
</script>
