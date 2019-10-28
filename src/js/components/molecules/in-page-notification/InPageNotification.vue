<template>
    <div v-show="display" class="notification in-page-notification">
        <icon-button button-class="icon-button in-page-notification__button button--close" button-aria-label="close"
                     icon-name="close" @click="close"/>
        <p class="notification__content notification__content--centered">
            {{ message }}
        </p>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import Events from '../../../constants/events';

    export default Vue.component('InPageNotification', {
        props: {
            message: {
                type: String,
                required: true,
            },
            clickEvent: {
                type: Object,
                required: false,
            },
        },
        data() {
            return {
                display: true,
            }
        },
        methods: {
            close(): void {
                this.display = false;
                this.triggerEventClick();
            },
            clickEventData(): {} | null {
                if (!this.clickEvent) {
                    return null;
                }

                const {name, data} = this.clickEvent;
                return {
                    dataType: name,
                    data: {
                        ...data,
                        pageSlug: this.$route.fullPath,
                    },
                };
            },
            triggerEventClick(): void {
                if (!this.clickEvent) {
                    return;
                }

                this.$emitPublic(Events.gtm.close, this.clickEventData());
            }
        },
    });
</script>
