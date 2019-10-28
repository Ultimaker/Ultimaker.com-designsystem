<template>
    <li class="main-nav__item" role="menuitem" :class="{ 'main-nav__item--active': active }"
        @mouseleave="delayHideFlyout" @mouseenter="openFlyout">

        <div @keydown.down.prevent="selectFlyoutFirstLink"
             @keydown.tab.shift.exact="closeMobileNav"
             @keydown.esc.prevent="closeMobileNav">
            <base-link :url="url"
                       ref="parent"
                       class="main-nav__link"
                       @focus="openFlyout"
                       @click.native="closeMobileNav"
                       aria-haspopup="true"
                       :aria-controls="itemId"
                       :aria-current="isActive"
                       :label="label"
                       :aria-expanded="!isCompact && flyoutIsOpen"/>
        </div>

        <icon-button class="icon-button--small main-nav__toggle disable-focus"
                     :icon-name="angleDirection"
                     v-show="toggleIsVisible"
                     @click="toggleFlyout" tabindex="-1"/>

        <flyout :id="itemId" v-if="categories" ref="flyout"
                @content-link-click="closeMobileNav"
                @keydown.esc.native="selectParent"
                @open="openFlyout"
                @close="closeFlyout"
                @main="selectParent"
                class="flyout--large"
                :items="categories"
                :is-compact="isCompact"
                :class="{ 'flyout--is-open': flyoutIsOpen }"/>
    </li>
</template>

<script lang="ts">
    import { Vue } from 'vue-property-decorator';
    import BrowserCapabilities from '../../../utils/browser-capabilities';

    export default Vue.component('MainNavigationItem', {
        props: {
            mainNavOpen: {
                type: Boolean,
                required: false,
            },
            label: {
                type: String,
                required: true,
            },
            url: {
                type: String,
                required: true,
            },
            categories: {
                type: Array,
                required: false,
            },
            itemId: {
                type: String,
                required: true,
            },
            isCompact: {
                type: Boolean,
                required: false,
            },
            active: {
                type: Boolean,
                required: true,
            },
        },
        data(): any {
            return {
                flyoutIsOpen: false,
                hideTimeout: null,
                angleDirection: 'angle-down',
                isTouch: BrowserCapabilities.supportsTouch,
            }
        },
        computed: {
            toggleIsVisible(): boolean {
                return !!this.categories && !this.isCompact && this.isTouch;
            },
            isActive(): string | boolean {
                return this.active ? 'page' : false;
            },
        },
        watch: {
            async flyoutIsOpen(newVal): Promise<void> {
                await this.$nextTick();
                await new Promise(resolve => setTimeout(resolve, 10));
                this.angleDirection = newVal ? 'angle-up' : 'angle-down';
            },
        },
        methods: {
            closeMobileNav(): void {
                this.$emit('nav-assist-click', 'close-mobile-nav');
                this.closeFlyout();
            },
            focus(): void {
                const navLink: any = this.$refs.parent;
                if (navLink && navLink.$el) {
                    navLink.$el.focus();
                }
            },
            async openFlyout(): Promise<any> {
                await this.$nextTick();
                await new Promise(resolve => setTimeout(resolve, 10));

                if (this.hideTimeout) {
                    clearTimeout(this.hideTimeout);
                    this.hideTimeout = null;
                }

                this.flyoutIsOpen = true;
            },
            closeFlyout(): void {
                this.flyoutIsOpen = false;
            },
            toggleFlyout(): void {
                if (this.flyoutIsOpen) {
                    this.closeFlyout();
                    return;
                }

                this.openFlyout().then();
            },
            delayHideFlyout(): Promise<any> {
                return new Promise((resolve) => {
                    if (this.hideTimeout === null) {
                        this.hideTimeout = setTimeout(() => {
                            this.hideTimeout = null;
                            this.closeFlyout();
                            resolve();
                        }, 100);
                    }
                });
            },
            async selectFlyoutFirstLink(): Promise<any> {
                await this.openFlyout();
                await this.$nextTick();

                const refs: any = this.$refs;
                if (refs.flyout && refs.flyout.selectFirstLink) {
                    await refs.flyout.selectFirstLink();
                }
            },
            selectNextNavItem(): void {
                this.closeFlyout();
                this.$emit('tab');
            },
            selectPrevNavItem(): void {
                this.closeFlyout();
                this.$emit('shifttab');
            },
            async selectParent(): Promise<any> {
                if (this.isCompact) {
                    return;
                }

                const {parent} = this.$refs;

                // @ts-ignore
                if (parent.$el) {
                    // @ts-ignore
                    parent.$el.focus();
                    // @ts-ignore
                } else if (parent.focus) {
                    // @ts-ignore
                    parent.focus();
                }

                await this.$nextTick();
                this.closeFlyout();
            }
        }
    })

</script>
