<template>
    <footer class="footer-block">
        <cta-block :ctas="ctas.ctas"
                   styleContentButton="button"
                   v-if="ctas"
                   mod="footer"
                   block="overview" />
    </footer>
</template>

<script lang="ts">
    import Vue from 'vue';

    export default Vue.component('FooterBlock', {
        props: {
            ctas: {
                type: Object,
            },
        },
    });
</script>
