<template>
    <div class="product">
        <div class="product__icon-container">
            <icon class="product__icon" :icon-name="icon"></icon>
        </div>
        <div class="product__information">
            <p class="product__name">
                {{name}}
            </p>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';

    export default Vue.component('Product', {
        props: {
            icon: {
                type: String,
                required: true,
            },
            name: {
                type: String,
                required: true,
            },
            pricing: {
                type: Object,
                required: true,
            }
        },
    });
</script>
