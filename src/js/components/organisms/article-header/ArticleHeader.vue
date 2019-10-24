<template>
    <header class="article-header container">
        <article-author v-bind="author" :publishedDate="publishedDate" />
        <list-unordered class="article-header__list" :listItems="listItems" />
    </header>
</template>

<script lang="ts">
    import Vue from 'vue';

    export default Vue.component('ArticleHeader', {
        props: {
            author: {
                type: Object,
                required: true,
            },
            labels: {
                type: Array,
            },
            publishedDate: {
                type: String,
                required: true,
            },
        },
        computed: {
            listItems(): object {
                let properties: any = [];

                if (this.labels) {
                    properties = this.labels.map((property) => ({
                        item: {
                            item: {
                                item: property,
                            },
                            type: 'SpanLabel',
                        },
                        type: 'LiInline',
                    }));
                }

                return {
                    items: properties,
                    type: 'LiInline',
                };
            }
        }
    });
</script>
