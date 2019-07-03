import { Vue, Component, Prop } from 'vue-property-decorator';
import { MainNavigationProps } from './main-navigation.models';
import WithRender from './main-navigation.vue.html';

import ViewportUtility from 'utils/viewport';
import BrowserCapabilities from 'utils/browser-capabilities';

@WithRender
@Component({
    name: 'MainNavigation',
})

export class MainNavigation extends Vue implements MainNavigationProps {
    @Prop({ type: Array, required: true }) navigation!: MainNavigationProps['navigation'];
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
