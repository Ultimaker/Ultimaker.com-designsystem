import { Vue, Component, Prop } from 'vue-property-decorator';
import { PageHeaderProps } from './page-header.models';
import WithRender from './page-header.vue.html';

import ViewportUtility from 'utils/viewport';
import PublicEventService from 'plugins/public-event-service';

@WithRender
@Component({
    name: 'PageHeader',
})

export class PageHeader extends Vue implements PageHeaderProps {
    @Prop({ type: Array, required: false }) navigation!: PageHeaderProps['navigation'];
    @Prop({ type: Object, required: false }) cta!: PageHeaderProps['cta'];
    @Prop({ type: Object, required: false }) search!: PageHeaderProps['search'];
    @Prop({ type: String, required: false }) language?: PageHeaderProps['language'];
    @Prop({ type: Boolean, required: true }) mainNavOpen!: boolean;

    assistUsed: boolean = false;
    viewportUtil: any = new ViewportUtility();
    drawerHeight: number = 0;
    searchOpen: boolean = false;
    showCompactMenu: boolean = true;
    maxMobileRes: number = 1025;
    resize: boolean = false;
    $refs!: {
        search: HTMLFormElement,
    };

    get headerClasses() {
        const isFixed = this.viewportUtil.scrollY >= this.drawerHeight;

        return {
            'header--absolute': !isFixed,
            'header--fixed': isFixed,
        };
    }

    openSearch() {
        this.searchOpen = true;
    }

    closeSearch() {
        this.searchOpen = false;
    }

    handleShowCompactMenu(show): void {
        if (!show) {
            this.closeMainNav();
        }
    }

    handleFocus() {
        if (!this.$refs.search || !this.$refs.search.focusInput) {
            return;
        }
        this.$refs.search.focusInput();
    }

    handleNavAssistClick(stateChange): void {
        if (stateChange === 'open-mobile-nav') {
            this.closeSearch();
            this.openMainNav();
        }

        if (stateChange === 'close-mobile-nav') {
            this.closeSearch();
            this.closeMainNav();
        }
    }

    focusFirstSysNavItem() {
        const firstNavItem: HTMLElement | null = this.$el.querySelector('.sys-nav__link');

        if (firstNavItem) {
            firstNavItem.focus();
        }
    }

    focusHomeNavItem() {
        const homeLink: HTMLElement | null = this.$el.querySelector('.home-link');

        if (homeLink) {
            homeLink.focus();
        }
    }

    handleResize() {
        this.showCompactMenu = this.viewportUtil.screenWidth < this.maxMobileRes;
    }

    handleSizeEvent({ element, size }): void {
        if (element === 'drawer') {
            this.drawerHeight = size;
        }
    }

    openMainNav(): void {
        this.mainNavOpen = true;
    }

    closeMainNav(): void {
        this.mainNavOpen = false;
    }

    mounted() {
        PublicEventService.on('size', this.handleSizeEvent);
        this.viewportUtil.addResizeHandler(this.handleResize);
        this.handleResize();
    }

    beforeDestroy() {
        this.viewportUtil.removeResizeHandler(this.handleResize);
    }
}
