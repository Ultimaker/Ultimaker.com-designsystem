<template>
    <nav aria-label="sub items" class="subnavigation subnavigation--fixed" ref="subNav" v-if="items">
        <ul class="subnavigation__list" :class="isTouch ? 'touch' : ''" role="presentation"  v-if="items">
            <li class="subnavigation__item" v-for="(item, index) in items" ref="listItems" >
                <component :is="item.type"
                           :key="index"
                           v-bind="item">
                </component>
            </li>
        </ul>
    </nav>
</template>

<script lang="ts">
    import Vue from 'vue';
    import BrowserCapabilities from 'utils/browser-capabilities';

    export default Vue.component('SubNavigation', {
        props: {
            items: {
                type: Array,
                required: true
            },
        },
        data() {
            return {
                activeSelector: '.exact-active',
                scrollTimeout: 300,
                isTouch: false,
            }
        },
        mounted() {
            const subnav: any = this.$refs.subNav;
            this.isTouch = BrowserCapabilities.supportsTouch;

            if (subnav) {
                const activeItem = subnav.querySelector(this.activeSelector);

                if (activeItem && this.isTouch) {
                    setTimeout(() => activeItem.scrollIntoView({ inline: 'center' }), this.scrollTimeout);
                }
            }
        }
    });
</script>
