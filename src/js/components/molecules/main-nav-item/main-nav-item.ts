import { Vue, Component, Prop, Watch } from 'vue-property-decorator';

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
        return !!this.items && !this.isCompact && this.isTouch;
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
                },                            100);
            }
        });
    }

    async selectFlyoutFirstLink(): Promise<any> {
        await this.showFlyout();
        await this.$nextTick();

        const refs: any =  this.$refs;
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

        const parent: any =  this.$refs.parent;
        if (parent.$el) {
            parent.$el.focus();
        } else if (parent.focus) {
            parent.focus();
        }

        await this.$nextTick();

        this.hideFlyout();
    }
}
