import { Vue, Component, Prop } from 'vue-property-decorator';

import ViewportUtility from 'utils/viewport';

import { LinkList as LinkListInterface } from '@ultimaker/ultimaker.com-model-definitions/dist/molecules/link-list/LinkList';
import BrowserCapabilities from 'utils/browser-capabilities';

@Component({
    name: 'main-nav',
    template: require('./main-nav.html'),
})

export default class MainNav extends Vue  {
    @Prop({ type: Object, required: true }) linkList!: LinkListInterface;
    @Prop({ type: Boolean, required: false }) mainNavOpen?: boolean;

    viewportUtil: any = new ViewportUtility();
    showCompactMenu: any  = null;
    ready: boolean =  false;
    timeout: number = 100;

    get classList() {
        return {
            'main-nav--small': this.showCompactMenu,
            'main-nav--large': !this.showCompactMenu,
            'main-nav--open': this.mainNavOpen && this.showCompactMenu,
        };
    }

    handleResize() {
        this.showCompactMenu = this.viewportUtil.isTablet;
        this.ready = true;
    }

    beforeMount() {
        this.ready = false;
        this.viewportUtil.addResizeHandler(this.handleResize);
        if (BrowserCapabilities.isBrowser) {
            this.showCompactMenu = this.viewportUtil.isTablet;
        }

        // trigger resize sets ready to true, so component doesn't animate when dehydrating/instantiating
        this.viewportUtil.triggerResize();
        // timeout when trigger resize doesn't fire
        setTimeout(() => { this.ready = true; }, this.timeout);
    }

    beforeDestroy() {
        this.viewportUtil.removeResizeHandler(this.handleResize);
    }
}
