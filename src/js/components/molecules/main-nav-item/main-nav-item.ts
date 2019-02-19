import { Vue, Component, Prop } from 'vue-property-decorator';

import { NavigationItem  } from '@ultimaker/ultimaker.com-model-definitions/dist/molecules/navigation-item/NavigationItem';
import BrowserCapabilities from 'utils/browser-capabilities';

@Component({
    name: 'main-nav-item',
    template: require('./main-nav-item.html'),
})

export default class MainNavItem extends Vue  {
    @Prop({ type: Boolean, required: false }) mainNavOpen?: boolean;

    @Prop({ type: String, required: true }) label!: string;
    @Prop({ type: String, required: false }) url?: string;
    @Prop({ type: Array, required: false }) items?: NavigationItem[];

    @Prop({ type: Object, required: false }) bottomLink?: object;
    @Prop({ type: String, required: true }) itemId!: string;
    @Prop({ type: Boolean, required: false }) isCompact?: boolean;
    @Prop({ type: Boolean, required: true }) active!: boolean;

    flyoutIsOpen: boolean =  false;
    hideTimeout: null = null;
    isTouch: boolean = BrowserCapabilities.supportsTouch;

    get isActive(): string | boolean {
        return this.active ? 'page' : false;
    }

    get angleDirection(): string {
        return this.flyoutIsOpen ? 'angle-up' : 'angle-down';
    }

    get flyoutTransitionName(): string {
        return this.isCompact ? '' : 'flyout-open';
    }

    get toggleIsVisible(): boolean {
        return !!this.items && !this.isCompact && this.isTouch;
    }

    focus(): void {
        const navLink = this.$refs.parent;
        // @ts-ignore
        if (navLink && navLink.$el) {
            // @ts-ignore
            navLink.$el.focus();
        }
    }

    async showFlyout(): Promise<any> {
        await this.$nextTick();

        if (this.hideTimeout) {
            // @ts-ignore
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
                // @ts-ignore
                this.hideTimeout = setTimeout(() => {
                    this.hideTimeout = null;
                    this.hideFlyout();
                    resolve();
                },                            100);
            }
        });
    }

    async selectFlyoutFirstLink(): Promise<any> {
        this.showFlyout();
        await this.$nextTick();

        // @ts-ignore
        if (this.$refs.flyout && this.$refs.flyout.selectFirstLink) {
            // @ts-ignore
            this.$refs.flyout.selectFirstLink();
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

        const parent =  this.$refs.parent;
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
