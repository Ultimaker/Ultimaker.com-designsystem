<template>
    <section class="organism brands2">
        <article class="container">
            <header-block :title="title" :subtitle="subtitle"/>
            <list-unordered-limit :limit="limit" :listItems="items"/>
            <footer-block :ctas="ctas"/>
        </article>
    </section>
</template>

<script lang="ts">
    import Vue from 'vue';

    export default Vue.component('Brands', {
        props: {
            ctas: {
                type: Object,
            },
            expand: {
                type: Object,
            },
            items: {
                type: Array,
                required: true,
            },
            limit: {
                type: Object,
            },
            subtitle: {
                type: String,
            },
            title: {
                type: String,
                required: true,
            },
        },
    });
</script>
