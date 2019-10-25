<template>
    <article class="organism overview">
        <section class="container">
            <header-block :title="title" :subtitle="subtitle" />

            <template v-for="(section, index) in sections">
                <component :is="section.type" v-bind="section" :key="index" />
            </template>

            <footer-block :ctas="ctas" />
        </section>
    </article>
</template>

<script lang="ts">
    import Vue from 'vue';

    export default Vue.component('Overview', {
        props: {
            title: {
                type: String,
                required: true
            },
            subtitle: {
                type: String,
                required: false,
            },
            sections: {
                type: Array,
                required: true,
            },
            ctas: {
                type: Object,
                required: false,
            }
        }
    });
</script>
