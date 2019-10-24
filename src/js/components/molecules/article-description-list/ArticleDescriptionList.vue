<template>
    <section class="article-description-list">
        <dl>
            <template v-for="{ term, description } in descriptions">
                <dt>{{ term }}</dt>
                <dd>{{ description }}</dd>
            </template>
        </dl>
    </section>
</template>

<script lang="ts">
    import Vue from 'vue';

    export default Vue.component('ArticleDescriptionList', {
        props: {
            descriptions: {
                type: Array,
                required: true,
            },
        },
    });
</script>
