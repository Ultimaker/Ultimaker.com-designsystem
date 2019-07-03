import { Vue, Component, Prop, Watch } from 'vue-property-decorator';
import { MainNavigationItemProps } from './main-navigation-item.models';
import WithRender from './main-navigation-item.vue.html';

import BrowserCapabilities from 'utils/browser-capabilities';

@WithRender
@Component({
    name: 'MainNavigationItem',
})

export class MainNavigationItem extends Vue implements MainNavigationItemProps {
    @Prop({ type: Boolean, required: false }) mainNavOpen?: boolean;

    @Prop({ type: String, required: true }) label!: MainNavigationItemProps['label'];
    @Prop({ type: String, required: true }) url!: MainNavigationItemProps['url'];
    @Prop({ type: Array, required: false }) categories?: MainNavigationItemProps['categories'];

    @Prop({ type: String, required: true }) itemId!: string;
    @Prop({ type: Boolean, required: false }) isCompact?: boolean;
    @Prop({ type: Boolean, required: true }) active!: boolean;

    flyoutIsOpen: boolean = false;
    hideTimeout: any = null;
    angleDirection: string = 'angle-down';
    isTouch: boolean = BrowserCapabilities.supportsTouch;

    get isActive(): string | boolean {
        return this.active ? 'page' : false;
    }

    @Watch('flyoutIsOpen')
    async function(newVal) {
        await this.$nextTick();
        await new Promise(resolve => setTimeout(resolve, 10));
        this.angleDirection = newVal ? 'angle-up' : 'angle-down';
    }

    get toggleIsVisible(): boolean {
        return !!this.categories && !this.isCompact && this.isTouch;
    }

    focus(): void {
        const navLink: any = this.$refs.parent;
        if (navLink && navLink.$el) {
            navLink.$el.focus();
        }
    }

    async showFlyout(): Promise<any> {
        await this.$nextTick();
        await new Promise(resolve => setTimeout(resolve, 10));

        if (this.hideTimeout) {
            clearTimeout(this.hideTimeout);
            this.hideTimeout = null;
        }

        this.flyoutIsOpen = true;
    }

    hideFlyout(): void {
        this.$emit('closeMainNav');
        this.flyoutIsOpen = false;
    }

    toggleFlyout(): void {
        this.flyoutIsOpen = !this.flyoutIsOpen;
    }

    delayHideFlyout(): Promise<any> {
        return new Promise((resolve) => {
            if (this.hideTimeout === null) {
                this.hideTimeout = setTimeout(() => {
                    this.hideTimeout = null;
                    this.hideFlyout();
                    resolve();
                }, 100);
            }
        });
    }

    async selectFlyoutFirstLink(): Promise<any> {
        await this.showFlyout();
        await this.$nextTick();

        const refs: any = this.$refs;
        if (refs.flyout && refs.flyout.selectFirstLink) {
            await refs.flyout.selectFirstLink();
        }
    }

    selectNextNavItem(): void {
        this.hideFlyout();
        this.$emit('tab');
    }

    selectPrevNavItem(): void {
        this.hideFlyout();
        this.$emit('shifttab');
    }

    async selectParent(): Promise<any> {
        if (this.isCompact) { return; }

        const { parent } = this.$refs;
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

        this.hideFlyout();
    }
}
