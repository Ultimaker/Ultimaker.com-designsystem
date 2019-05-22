import { Vue, Component, Prop } from 'vue-property-decorator';

import ViewportUtility from 'utils/viewport';

import { NavigationItem } from '@ultimaker/ultimaker.com-model-definitions/dist/molecules/navigation-item/NavigationItem';
import BrowserCapabilities from 'utils/browser-capabilities';
import WithRender from './main-nav.vue.html';

@WithRender
@Component({
    name: 'main-nav',
})

export default class MainNav extends Vue {
    @Prop({ type: Array, required: false }) items?: NavigationItem[];
    @Prop({ type: Boolean, required: false }) mainNavOpen?: boolean;

    viewportUtil: any = new ViewportUtility();
    showCompactMenu: any = true;

    get classList() {
        return {
            'main-nav--small': this.showCompactMenu,
            'main-nav--large': !this.showCompactMenu,
            'main-nav--open': this.mainNavOpen && this.showCompactMenu,
        };
    }

    handleResize() {
        this.showCompactMenu = this.viewportUtil.isTablet;
    }

    mounted() {
        this.viewportUtil.addResizeHandler(this.handleResize);

        if (BrowserCapabilities.isBrowser) {
            this.showCompactMenu = this.viewportUtil.isTablet;
        }
    }

    beforeDestroy() {
        this.viewportUtil.removeResizeHandler(this.handleResize);
    }
}
