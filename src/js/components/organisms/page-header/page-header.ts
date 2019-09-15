import { Vue, Component, Prop } from 'vue-property-decorator';
import { PageHeaderProps } from './page-header.models';
import WithRender from './page-header.vue.html';
import { Getter } from 'vuex-class';

import ViewportUtility from 'utils/viewport';
const namespace = { namespace: 'sizeEmitter' };

@WithRender
@Component({
    name: 'PageHeader',
})

export class PageHeader extends Vue implements PageHeaderProps {
    @Prop({ type: Array, required: false }) navigation!: PageHeaderProps['navigation'];
    @Prop({ type: Object, required: false }) cta!: PageHeaderProps['cta'];
    @Prop({ type: Object, required: false }) search!: PageHeaderProps['search'];
    @Prop({ type: String, required: false }) language?: PageHeaderProps['language'];

    @Getter('storedHeights', namespace) storedHeights;

    assistUsed: boolean = false;
    viewportUtil: any = new ViewportUtility();
    searchOpen: boolean = false;
    showCompactMenu: boolean = true;
    maxMobileRes: number = 1025;
    resize: boolean = false;
    mainNavOpen: boolean = false;
    $refs!: {
        search: HTMLFormElement,
    };

    get headerClasses() {
        let isFixed = true;

        if (this.storedHeights.drawer !== null) {
            isFixed = this.viewportUtil.scrollY > this.storedHeights.drawer;
        }

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

    handleOpenCompactMenu(show): void {
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

    openMainNav(): void {
        this.mainNavOpen = true;
    }

    closeMainNav(): void {
        this.mainNavOpen = false;
    }

    beforeDestroy() {
        this.viewportUtil.removeResizeHandler(this.handleResize);
    }

    beforeMount() {
        this.viewportUtil.addResizeHandler(this.handleResize);
    }

    mounted() {
        this.handleResize();
    }
}
