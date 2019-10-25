<template>
    <article class="organism overview-ubr">
        <section class="container">
            <header-block :title="title" :subtitle="subtitle" />

            <div class="flexgrid flexgrid--justify-center flexgrid--gutter flexgrid--mobile-xl-row">
                <block-icon v-for="(blockIcon, index) in items" class="flexgrid__cell flexgrid__cell--xs-6 flexgrid__cell--sm-4 flexgrid__cell--lg-3" v-bind="blockIcon" :key="index"></block-icon>
            </div>

            <footer-block :ctas="ctas" />
        </section>
    </article>
</template>

<script lang="ts">
    import Vue from 'vue';

    export default Vue.component('OverviewUbr', {
        props: {
            title: {
                type: String,
                required: true
            },
            subtitle: {
                type: String,
                required: false,
            },
            items: {
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
