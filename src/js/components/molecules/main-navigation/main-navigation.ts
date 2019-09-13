import { Vue, Component, Prop } from 'vue-property-decorator';
import { MainNavigationProps } from './main-navigation.models';
import WithRender from './main-navigation.vue.html';

import ViewportUtility from 'utils/viewport';

@WithRender
@Component({
    name: 'MainNavigation',
})

export class MainNavigation extends Vue implements MainNavigationProps {
    @Prop({ type: Array, required: true }) navigation!: MainNavigationProps['navigation'];
    @Prop({ type: Boolean, required: false }) mainNavOpen?: boolean;

    viewportUtil: any = new ViewportUtility();
    showCompactMenu: any = true;

    get classList(): object {
        return {
            'main-nav--small': this.showCompactMenu,
            'main-nav--large': !this.showCompactMenu,
            'main-nav--open': this.mainNavOpen && this.showCompactMenu,
        };
    }

    handleNavAssistClick(stateChange): void {
        this.$emit('nav-assist-click', stateChange);
    }

    handleResize(): void {
        this.showCompactMenu = this.viewportUtil.isTablet;

        if (!this.showCompactMenu) {
            this.$emit('show-compact-menu', false);
        }
    }

    mounted(): void {
        this.viewportUtil.addResizeHandler(this.handleResize);
        this.showCompactMenu = this.viewportUtil.isTablet;
    }

    beforeDestroy(): void {
        this.viewportUtil.removeResizeHandler(this.handleResize);
    }
}
