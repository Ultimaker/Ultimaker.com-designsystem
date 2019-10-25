<template>
    <article class="organism tabbed-table">
        <section class="container">
            <header-block :title="title" :subtitle="subtitle" />
            <tabs v-if="tabs && tabs.length" :tabs="tabs" :sequenced="false"/>
            <footer-block :ctas="ctas" />
        </section>
    </article>
</template>

<script lang="ts">
    import Vue from 'vue';

    export default Vue.component('TabbedTable', {
        props: {
            title: {
                type: String,
                required: true,
            },
            subtitle: {
                type: String,
                required: false,
            },
            tabs: {
                type: Array,
                required: true,
            },
            ctas: {
                type: Object,
                required: true,
            },
        },
    });
</script>
