<template>
    <article class="card-article" @click="triggerEventClick">
        <anchor-overlay v-if="url" :url="url" :title="title" />
        <div class="card-article__image-container" v-if="image">
            <c-image class="card-article__image" v-bind="image" />
        </div>
        <h3 class="card-article__heading">{{ title }}</h3>
        <p v-if="description" class="card-article__description">
            {{ description }}
        </p>
        <list-unordered class="card-article__labels-list" :listItems="listItems"/>
    </article>
</template>

<script lang="ts">
    import Vue from 'vue';
    import CardBase from '../card-base/CardBase.vue';

    export default Vue.component('CardArticle', {
        extends: CardBase,
        props: {
            description: {
                type: String,
            },
            labels: {
                type: Array,
            },
            url: {
                type: String,
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
