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
    import Events from '../../../../constants/events';

    export default Vue.component('CardBase', {
        props: {
            clickEvent: {
                type: Object,
            },
            image: {
                type: Object,
            },
            title: {
                type: String,
                required: true,
            },
        },
        computed: {
            clickEventData(): object {
                if (!this.clickEvent) {
                    return {};
                }

                return {
                    dataType: this.clickEvent.name,
                    data: {
                        ...this.clickEvent.data,
                        pageSlug: this.$route.fullPath,
                    },
                };
            },
        },
        methods: {
            triggerEventClick(): void {
                if (!this.clickEvent) {
                    return;
                }

                this.$emitPublic(Events.gtm.click, this.clickEventData);
            }
        }
    });
</script>
