<template>
    <a class="business-card"
       :href="contentLink.url"
       rel="noopener"
       target="_blank"
       tabindex="0"
       @click="clickEvent ? $emitPublic(clickEventType, clickEventData) : ''"
    >
        <div class="business-card__header">
            <div class="business-card__image-wrapper">
                <c-image class="business-card__image" resizeBehavior="pad" v-bind="image" v-if="image" />
            </div>
            <div class="business-card__description">
                <h4 class="business-card__title">
                    {{ title }}
                </h4>

                <p class="business-card__property" v-if="properties" v-for="(property) in properties">
                    {{ property.value }} {{ property.label }}
                </p>
            </div>
        </div>
        <div class="business-card__footer">
        <span class="link faux-content-link business-card__link">
            <span class="link__underline">
                {{ contentLink.label }}
            </span>
        </span>
        </div>
    </a>
</template>

<script lang="ts">
    import Vue from 'vue';
    import Events from '../../../../constants/events';

    export default Vue.component('BusinessCard', {
        props: {
            title: {
                type: String,
                required: true,
            },
            image: {
                type: Object,
                required: false,
            },
            contentLink: {
                type: Object,
                required: true,
            },
            properties: {
                type: Array,
                required: false,
            },
            clickEvent: {
                type: Object,
                required: false,
            },
        },
        computed: {
            clickEventType(): string {
                return Events.gtm.click;
            },
            clickEventData(): object | null {
                if (this.clickEvent) {
                    return {
                        dataType: this.clickEvent.name,
                        data: this.clickEvent.data,
                    };
                }

                return null;
            }
        }
    });
</script>
