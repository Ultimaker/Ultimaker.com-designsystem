<template>
    <article class="brand">
        <c-image v-bind="image" class="brand__image"/>
    </article>
</template>

<script lang="ts">
    import Vue from 'vue';

    export default Vue.component('Brand', {
        props: {
            image: {
                type: Object,
            },
        },
    });
</script>
