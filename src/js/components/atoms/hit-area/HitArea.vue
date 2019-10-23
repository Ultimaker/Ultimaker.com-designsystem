<template>
    <a class="hit-area" role="button" tabindex="0">
        <slot></slot>
    </a>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.component('HitArea', {});
</script>
