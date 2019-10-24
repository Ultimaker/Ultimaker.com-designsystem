<template>
    <section class="organism article">
        <div class="container">
            <component
                v-for="articleMolecule in molecules"
                v-bind="articleMolecule"
                :is="articleMolecule.type"
            />
            <SocialSharing />
        </div>
    </section>
</template>

<script lang="ts">
    import Vue from 'vue';

    export default Vue.component('ArticleContent', {
        props: {
            molecules: {
                type: Array,
                required: true,
            },
        },
    });
</script>
