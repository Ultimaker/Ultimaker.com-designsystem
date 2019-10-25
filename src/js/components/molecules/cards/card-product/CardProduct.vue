<template>
    <article class="card-product">
        <anchor-overlay :url="url" :title="title"/>
        <div class="card-product__image-container">
            <c-image class="card-product__image" v-bind="image" v-if="image && !imageError" @error="imageError = true" />
            <div class="img--contain card-product__image gray-background" v-if="!image || imageError">{{ title }}</div>
        </div>
        <h3 class="card-product__heading">{{ title }}</h3>
        <list-unordered class="card-product__labels-list" :listItems="listItems"/>
    </article>
</template>

<script lang="ts">
    import Vue from 'vue';

    export default Vue.component('CardProduct', {
        props: {
            image: {
                type: Object,
            },
            properties: {
                type: Array,
            },
            title: {
                type: String,
                required: true,
            },
            url: {
                type: String,
                required: true,
            },
        },
        data() {
            return {
                imageError: false,
            };
        },
        computed: {
            listItems(): object {
                let properties:any = [];

                if (this.properties) {
                    properties = this.properties.map(
                        property => ({
                            item: {
                                item: {
                                    item: property,
                                },
                                type: 'SpanLabel',
                            },
                            type: 'LiInline',
                        }),
                    );
                }

                return {
                    items: properties,
                    type: 'LiInline',
                };
            }
        },
    });
</script>
