/* eslint-disable */
import { Vue, Component, Prop } from 'vue-property-decorator';

import { TweenLite, Power3 } from 'gsap';
import Draggable from 'gsap/Draggable';
import 'utils/throw-props-plugin';

import Defaults from 'constants/defaults';
import ViewportUtil from 'utils/viewport';
import BrowserCapabilities from 'utils/browser-capabilities';

@Component({
    name: 'faux-vertical-scroll',
    template: require('./faux-vertical-scroll.html'),
})

export default class FauxVerticalScroll extends Vue {

    private viewportUtil: ViewportUtil = new ViewportUtil();
    private transitionDuration: number = Defaults.defaultDuration;

    private draggableElement: any =  undefined;

    private scale: number = 0;
    private canDrag: boolean = false;
    private isMounted: boolean = false;

    barStyle(): object {
        return {
            display: this.canDrag ? 'block' : 'hidden',
            opacity: this.canDrag ? 1 : 0,
            width: `${ this.scale }px`,
        };
    }

    calculateOffset(): number {
        if (this.isMounted &&
          (<any>this.$refs.content) &&
          (<any>this.$refs.container)) {
            return  (<any>this.$refs.content).scrollWidth - (<any>this.$refs.container).clientWidth;
        }

        return 0;
    }

    tweenBar(): void {
        const contentWidth = (<any>this.$refs.content).scrollWidth;
        const clientWidth =  (<any>this.$refs.container).clientWidth;

        const correction = ((clientWidth / 100) * 0.51);
        const offSet = (clientWidth - (<any>this.$refs.content)._gsTransform.x * correction) + this.scale;

        const percentage = (100 - ((contentWidth - (offSet - clientWidth)) / contentWidth * 100));
        const width = percentage * (clientWidth / 100);

        TweenLite.to((<any>this.$refs.bar), this.transitionDuration / 2, {
            left: offSet === clientWidth ? 0 : percentage > 100 ? (clientWidth - this.scale) : (width - this.scale),
            ease: Power3.easeOut,
        });
    }

    createDraggable(): void {
        const { content, } = this.$refs;
        const clientWidth =  (<any>this.$refs.container).clientWidth;

        this.draggableElement = Draggable.create(content, {
            type: 'x',
            lockAxis: 'x',
            edgeResistance: 0.65,
            overshootTolerance: ((clientWidth / 100) * 5),
            throwProps:{
                x: {
                    velocity: 'auto',
                    max: 0,
                    min: -this.calculateOffset(),
                },
            },
            onDrag: () => {
                this.tweenBar();
            },
            onThrowUpdate:() => {
                this.tweenBar();
            },
        });
    }

    calculateBarScale(): void {
        const contentWidth = (<any>this.$refs.content).scrollWidth;
        const clientWidth = (<any>this.$refs.container).clientWidth;

        this.scale = (contentWidth / clientWidth) * 100;
        this.barStyle();
    }

    mounted() :void {

        this.canDrag = this.calculateOffset() > 0;
        this.isMounted = true;

        this.calculateBarScale();

        if (!this.draggableElement && this.canDrag) {
            this.createDraggable();
        }
    }

    handleResize(): void {
        if (this.isMounted) {
            this.canDrag = this.calculateOffset() > 0;

            if (this.draggableElement) {
                this.draggableElement[0].kill();
            }

            if (this.canDrag) {
                this.calculateBarScale();
                this.createDraggable();
            }
        }
    }

    beforeMount(): void {
        this.viewportUtil.addResizeHandler(this.handleResize);

        if (BrowserCapabilities.isBrowser) {
            this.handleResize();
        }

        this.viewportUtil.triggerResize();

        setTimeout(() => {
            this.handleResize();
        },         100);
    }

    beforeDestroy(): void {
        this.draggableElement[0].kill();
        this.viewportUtil.removeResizeHandler(this.handleResize);
    }
}
