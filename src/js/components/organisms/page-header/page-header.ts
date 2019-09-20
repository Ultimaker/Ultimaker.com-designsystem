import ViewportUtility from 'utils/viewport';
import WithRender from './page-header.vue.html';
import { PageHeaderProps } from './page-header.models';
import { Vue, Component, Prop } from 'vue-property-decorator';

@WithRender
@Component({
    name: 'PageHeader',
})
export class PageHeader extends Vue implements PageHeaderProps {
    @Prop({ type: Object, required: false }) public cta!: PageHeaderProps['cta'];
    @Prop({ type: String, required: false, default: '/' }) public homepageUrl!: string;
    @Prop({ type: String, required: false }) public language?: PageHeaderProps['language'];
    @Prop({ type: Array, required: false }) public navigation!: PageHeaderProps['navigation'];
    @Prop({ type: Object, required: false }) public search!: PageHeaderProps['search'];

    private $onPublic;
    private $offPublic;
    private assistUsed: boolean = false;
    private mainNavOpen: boolean = false;
    private maxMobileRes: number = 1025;
    private preferencesBarStatus: string = 'open';
    private resize: boolean = false;
    private searchOpen: boolean = false;
    private showCompactMenu: boolean = true;
    private viewportUtil: ViewportUtility = new ViewportUtility();

    private get storedHeights(): { drawer: number; header: number } {
        // @ts-ignore
        return this.$parent.$store.getters['sizeEmitter/storedHeights'];
    }

    private get headerClasses(): object {
        let isFixed = true;

        if (this.storedHeights.drawer !== null && this.preferencesBarStatus !== 'closed') {
            isFixed = this.viewportUtil.scrollY >= this.storedHeights.drawer;
        }

        return {
            'header--absolute': !isFixed,
            'header--fixed': isFixed,
        };
    }

    private openSearch(): void {
        this.searchOpen = true;
    }

    private closeSearch(): void {
        this.searchOpen = false;
    }

    private handleOpenCompactMenu(show): void {
        if (!show) {
            this.closeMainNav();
        }
    }

    private handleFocus(): void {
        const { search }: HTMLFormElement = (this.$refs as HTMLFormElement);

        if (!this.$refs.search || !search.focusInput) {
            return;
        }

        search.focusInput();
    }

    private handleNavAssistClick(stateChange): void {
        if (stateChange === 'open-mobile-nav') {
            this.closeSearch();
            this.openMainNav();
        }

        if (stateChange === 'close-mobile-nav') {
            this.closeSearch();
            this.closeMainNav();
        }
    }

    private focusFirstSysNavItem(): void {
        const firstNavItem: HTMLElement | null = this.$el.querySelector('.sys-nav__link');

        if (firstNavItem) {
            firstNavItem.focus();
        }
    }

    private focusHomeNavItem(): void {
        const homeLink: HTMLElement | null = this.$el.querySelector('.home-link');

        if (homeLink) {
            homeLink.focus();
        }
    }

    private handleResize(): void {
        this.showCompactMenu = this.viewportUtil.screenWidth < this.maxMobileRes;
    }

    private openMainNav(): void {
        this.mainNavOpen = true;
    }

    private closeMainNav(): void {
        this.mainNavOpen = false;
    }

    private beforeDestroy(): void {
        this.viewportUtil.removeResizeHandler(this.handleResize);
        this.$offPublic('preferences-bar');
    }

    private beforeMount(): void {
        this.viewportUtil.addResizeHandler(this.handleResize);
    }

    private mounted(): void {
        this.handleResize();
        this.$onPublic('preferences-bar', (payload): void => { this.preferencesBarStatus = payload; });
    }
}
