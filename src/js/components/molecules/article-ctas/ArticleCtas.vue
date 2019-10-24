<template>
    <cta-block class="article-ctas" :ctas="ctas.ctas" />
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.component('ArticleCtas', {
    props: {
        ctas: {
            type: Object,
            required: false,
        },
    },
});
</script>
