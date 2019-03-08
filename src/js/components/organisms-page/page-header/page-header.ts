import { Vue, Component, Prop } from 'vue-property-decorator';

import ViewportUtility from 'utils/viewport';
import PublicEventService from 'plugins/public-event-service';

import { PageHeader as PageHeaderInterface } from '@ultimaker/ultimaker.com-model-definitions/dist/organisms/page-header/PageHeader';

@Component({
    name: 'page-header',
    template: require('./page-header.html'),
})

export default class PageHeader extends Vue implements PageHeaderInterface {
    @Prop({ type: Array, required: false }) navigation!: PageHeaderInterface['navigation'];
    @Prop({ type: Object, required: false }) cta!: PageHeaderInterface['cta'];
    @Prop({ type: Object, required: false }) search!: PageHeaderInterface['search'];
    @Prop({ type: Boolean, required: true }) mainNavOpen!: boolean;

    assistUsed: boolean =  false;
    viewportUtil: any =  new ViewportUtility();
    offsetTopHeader: number =  0;
    searchOpen: boolean =  false;
    showCompactMenu: boolean =  true;
    maxMobileRes: number = 1025;
    resize: boolean = false;
    $refs!: {
        search: HTMLFormElement,
    };

    get assistState() {
        return this.mainNavOpen || this.searchOpen;
    }

    get headerClasses() {
        const scrollY = this.viewportUtil.scrollY < 0 ? 0 : this.viewportUtil.scrollY;
        const isFixed = scrollY >= this.offsetTopHeader;

        return {
            'header--absolute': !isFixed,
            'header--fixed': isFixed,
        };
    }

    navAssistToggle() {
        if (this.searchOpen || this.mainNavOpen) {
            this.searchOpen = false;
            this.$emit('toggle-nav', false);
        } else {
            this.$emit('toggle-nav', true);
            this.searchOpen = false;
        }
    }

    openSearch() {
        this.searchOpen = true;
    }

    closeSearch() {
        this.searchOpen = false;
    }

    handleFocus() {
        if (!this.$refs.search || !this.$refs.search.focusInput) {
            return;
        }
        this.$refs.search.focusInput();
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

    beforeMount() {
        const loggedEvents = PublicEventService.log('size').filter(e => e.element === 'drawer');

        PublicEventService.on('size', ({ element, size }) => {
            if (element === 'drawer') {
                this.offsetTopHeader = size;
            }
        });

        if (loggedEvents.length > 0) {
            console.log('found drawer size event: ', loggedEvents);
            const lastEvent = loggedEvents[loggedEvents.length - 1];

            this.offsetTopHeader = lastEvent.size || 0;
        }
    }

    mounted() {
        this.handleResize();
        this.viewportUtil.addResizeHandler(this.handleResize);
    }

    beforeDestroy() {
        this.viewportUtil.removeResizeHandler(this.handleResize);
    }

}
