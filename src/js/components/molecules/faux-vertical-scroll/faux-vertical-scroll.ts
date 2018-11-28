/* eslint-disable */
import { Vue, Component, Prop } from 'vue-property-decorator';

import { TweenLite, Power3 } from 'gsap';
import Draggable from 'gsap/Draggable';
import * as ThrowProps from 'utils/throw-props-plugin';

import Defaults from 'constants/defaults';
import ViewportUtil from 'utils/viewport';
import BrowserCapabilities from 'utils/browser-capabilities';

@Component({
    name: 'faux-vertical-scroll',
    template: require('./faux-vertical-scroll.html'),
})

export default class FauxVerticalScroll extends Vue {

    viewportUtil: ViewportUtil = new ViewportUtil();
    transitionDuration: number = Defaults.defaultDuration;

    draggableElement: any =  undefined;

    scale: number = 0;
    canDrag: boolean = false;
    isMounted: boolean = false;

    barStyle() {
        return {
            display: this.canDrag ? 'block' : 'hidden',
            opacity: this.canDrag ? 1 : 0,
            width: `${ this.scale }px`,
        };
    }

    calculateOffset() {
        if (this.isMounted &&
          (<any>this.$refs.content) &&
          (<any>this.$refs.container)) {
            return  (<any>this.$refs.content).scrollWidth - (<any>this.$refs.container).clientWidth;
        }

        return 0;
    }

    createDraggable () {
        const { content } = this.$refs;

        this.draggableElement = Draggable.create(content, {
            type: 'x',
            lockAxis: 'x',
            edgeResistance: 0.65,
            throwProps:{
                x: {
                    velocity: 'auto',
                    max: 0,
                    min: -this.calculateOffset(),
                },
            },
            onThrowComplete: () => {

                const offSet = (<any>this.$refs.container).clientWidth - (<any>this.$refs.content)._gsTransform.x;
                const contentWidth = (<any>this.$refs.content).scrollWidth;
                const clientWidth =  (<any>this.$refs.container).clientWidth;

                const percentage = (100 - ((contentWidth - offSet) / contentWidth * 100));
                const width = percentage * (clientWidth / 100);

                TweenLite.to((<any>this.$refs.bar), this.transitionDuration / 2, {
                    left: offSet === clientWidth ? 0 : (width - this.scale),
                    ease: Power3.easeOut,
                });
            },
        });
    }

    calculateBarScale() {
        const clientWidth =  (<any>this.$refs.container).clientWidth;
        this.scale = (clientWidth / 100) * 10;
        this.barStyle();
    }

    mounted() {

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
