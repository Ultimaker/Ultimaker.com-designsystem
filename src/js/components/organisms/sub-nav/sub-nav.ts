import { Vue, Component, Prop, Watch } from 'vue-property-decorator';
import { TweenLite, Back, Power4 } from 'gsap';

import Defaults from 'constants/defaults';

import ViewportUtil from 'utils/viewport';
import BrowserCapabilities from 'utils/browser-capabilities';

import { ISubNavProps } from './sub-nav.models';

@Component({
    name: 'sub-nav',
    template: require('./sub-nav.html'),
})

export default class SubNav extends Vue {
    @Prop({ type: Object, required: true })
        page!: ISubNavProps;

    viewportUtil: ViewportUtil = new ViewportUtil();
    collapsed: boolean = false;

    transitionDuration: number = Defaults.defaultDuration;

    positionTop: number = 0;
    linkHeightMax: number = 96;
    linkHeightMin: number = 18;

    mapLink(link): string {
        return link.replace(/^\/api\/pages/, '');
    }

    toggleImages(amount: number, animation: any): void {
        (<any>this.$refs.images).forEach((image) => {
            TweenLite.to(image.$el, this.transitionDuration , {
                opacity: amount,
                ease: animation,
            });

            TweenLite.to(image.$el, this.transitionDuration * 2 , {
                height: amount,
                ease: animation,
            });
        });
    }

    toggleLinks(height: number): void {
        (<any>this.$refs.links).forEach((link) => {
            TweenLite.to(link.$el, this.transitionDuration, {
                height,
            });
        });
    }

    collapseNav(): void {
        this.toggleLinks(this.linkHeightMin);
        this.toggleImages(0, Back.easeOut);

        TweenLite.to((<any>this.$refs.subNav), 0.6, {
            top: 0,
            position: 'fixed',
            ease: Back.easeOut,
        });

        this.collapsed = true;
    }

    showNav(): void {

        this.toggleLinks(this.linkHeightMax);
        this.toggleImages(1, Back.easeIn);

        TweenLite.to((<any>this.$refs.subNav), this.transitionDuration * 2, {
            top: this.positionTop,
            position: 'relative',
        });

        this.collapsed = false;
    }

    handleScroll(): void {
        const correction = (10 * this.positionTop / 100);

        if ((this.viewportUtil.scrollY > -(this.positionTop - correction) || this.viewportUtil.scrollY === 0)
            && this.collapsed) {
            this.showNav();
        }

        if (this.viewportUtil.scrollY > (this.positionTop - correction)  && !this.collapsed) {
            this.collapseNav();
        }
    }

    beforeMount(): void {
        this.viewportUtil.addScrollHandler(this.handleScroll);

        if (BrowserCapabilities.isBrowser) {
            this.handleScroll();
        }

        this.viewportUtil.triggerResize();

        setTimeout(() => {
            this.handleScroll();
        },         100);
    }

    mounted(): void {
        if ((<any>this.$refs.subNav) &&
           (<any>this.$refs.subNav).previousElementSibling) {
            this.positionTop = (<any>this.$refs.subNav).previousElementSibling.offsetHeight;
        }
    }

    beforeDestroy(): void {
        this.viewportUtil.removeScrollHandler(this.handleScroll);
    }
}
