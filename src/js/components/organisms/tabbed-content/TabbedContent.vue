<template>
    <article class="organism tabbed-content">
        <section class="container">
            <header-block :title="title" :subtitle="subtitle" />

            <Tabs v-if="tabs && tabs.length" :tabs="tabs" :sequenced="sequenced" />

            <footer-block :ctas="ctas" />
        </section>
    </article>
</template>

<script lang="ts">
    import Vue from 'vue';

    export default Vue.component('TabbedContent', {
        props: {
            title: {
                type: String,
                required: true,
            },
            subtitle: {
                type: String,
            },
            tabs: {
                type: Array,
                required: true,
            },
            ctas: {
                type: Object,
            },
            sequenced: {
                type: Boolean,
                required: false,
                default: false,
            },
        },
    });
</script>
