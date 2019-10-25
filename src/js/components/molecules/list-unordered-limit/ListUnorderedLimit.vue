<template>
    <section class="list-unordered-limit">
        <main>
            <ul>
                <template v-for="(item, index) in listItems">
                    <li-item :item="item" :key="index" v-show="showLimit() === -1 || index < showLimit() || showAll"/>
                </template>
            </ul>
        </main>
        <footer v-show="showLimit() !== -1 && !showAll">
            <button @click="showHidden" class="button--secondary">{{ showButtonLabel() }}</button>
        </footer>
    </section>
</template>

<script lang="ts">
    import Vue from 'vue';
    import ViewportUtility from '../../../utils/viewport';
    import Events from '../../../constants/events';

    export default Vue.component('ListUnorderedLimit', {
        props: {
            listItems: {
                type: Array,
                required: true,
            },
            limit: {
                type: Object,
            },
        },
        data() {
            return {
                componentMounted: false,
                showAll: false,
                viewportUtil: new ViewportUtility(),
            }
        },
        methods: {
            getClickEventData(): object | null {
                if (!this.limit || !this.limit.expand || !this.limit.expand.clickEvent) {
                    return null;
                }

                const { clickEvent } = this.limit.expand;

                return {
                    dataType: clickEvent.name,
                    data: {
                        ...clickEvent.data,
                        pageSlug: this.$route.fullPath,
                    },
                };
            },

            /**
             * -1 means no limit
             *
             * @param {number|undefined} limit
             * @returns {number}
             */
            determineLimit(limit): number {
                if (limit === undefined) {
                    return -1;
                }

                if (this.listItems.length <= limit) {
                    return -1;
                }

                return limit;
            },


            showButtonLabel() {
                const { label } = this.limit && this.limit.expand ? this.limit.expand : { label: '' };

                return `${label} (${this.listItems.length})`;
            },

            showHidden() {
                this.showAll = true;
                this.$emitPublic(Events.gtm.click, this.getClickEventData());
            },

            /**
             * -1 means no limit
             *
             * @returns {number}
             */
            showLimit(): number {
                if (this.limit === undefined || !this.componentMounted) {
                    return -1;
                }

                if (this.viewportUtil.isMobile) {
                    return this.determineLimit(this.limit.smallScreen);
                }

                return this.determineLimit(this.limit.largeScreen);
            },
        },
        mounted() {
            this.componentMounted = true;
        },
    });
</script>
