import { Component, Prop, Watch, Mixins } from 'vue-property-decorator';
import { FocusArea, ICImageProps, ImageFormat, ResizeBehavior } from 'components/atoms/c-image/c-image.models';
import { InView } from 'js/mixins/in-view';
import BrowserCapabilities from 'utils/browser-capabilities';
import ViewportUtil from 'utils/viewport';
import { imageConstants } from './c-image.constants';
import WithRender from './c-image.vue.html';

@WithRender
@Component({
    name: 'c-image',
})

export default class CImage extends Mixins(InView) implements ICImageProps {
    @Prop({ type: String, required: true })
    mimeType!: string;

    @Prop({ type: String, required: true })
    url!: string;

    @Prop({ type: String, default: '' })
    alt!: string;

    @Prop({ type: Boolean, default: false })
    crop!: boolean;

    @Prop({ type: String, default: ImageFormat.default })
    imageFormat!: ImageFormat;

    @Prop({ type: String, default: ResizeBehavior.default })
    resizeBehavior!: ResizeBehavior;

    @Prop({ type: String, default: FocusArea.center })
    focusArea!: FocusArea;

    @Prop({ type: Number, default: 0 })
    radius!: number;

    @Prop({ type: Number, default: 65 })
    quality!: number;

    @Prop({ type: String, default: null })
    backgroundColor!: string | null;

    viewportUtil = new ViewportUtil();
    imageLoaded: boolean = false;
    ready:boolean = false;
    width: number = 0;
    height: number = 0;

    async mounted() {
        if (!BrowserCapabilities.isBrowser) return;

        this.viewportUtil.addResizeHandler(this.resizeHandler);

        await this.calculateDimensions(true);
        this.ready = true;
    }

    beforeDestroy() {
        this.viewportUtil.removeResizeHandler(this.resizeHandler);
        this.viewportUtil.removeScrollHandler(this.resizeHandler);
    }

    @Watch('url')
    async reset() {
        this.ready = false;
        this.imageLoaded = false;
        this.width = 0;
        this.height = 0;
        this.$nextTick(() => { this.ready = true; });

        if (this.inView) {
            await this.inViewWatcher(true);
        }
    }

    get classList() {
        return {
            'img--loading': !this.inView || !this.imageLoaded,
        };
    }

    get src() {
        if (BrowserCapabilities.isBrowser) {
            return imageConstants.tinyGif;
        }

        return this.url;
    }

    get srcset() {
        if (!this.ready) {
            return `${imageConstants.tinyGif} 1w`;
        }

        return `${this.imageLoaded && this.inView ? this.imageUrl : this.thumbUrl} ${this.width || imageConstants.initialSize}w`;
    }

    get imageUrl() {
        return `${this.url}${this.getParams({})}`;
    }

    get thumbUrl() {
        if (this.resizeBehavior !== ResizeBehavior.default) {
            const cropFactor = this.width > this.height ? this.width / imageConstants.initialSize : this.height / imageConstants.initialSize;
            const height = Math.round(this.height / cropFactor);
            const width = Math.round(this.width / cropFactor);

            return `${this.url}${this.getParams({ width, height })}`;
        }

        return `${this.url}${this.getParams({ width: imageConstants.initialSize })}`;
    }

    getParams(options?: {width?: number, height?: number}) {
        const elementWidth = this.width || imageConstants.initialSize;
        const elementHeight = this.height;
        const paramMap = new Map<string, any>([
            ['w', options && options.width ? options.width : elementWidth],
            ['h', options && options.height ? options.height : elementHeight],
            ['fit', this.resizeBehavior],
            ['f', this.focusArea],
            ['r', this.radius],
        ]);

        if (this.imageFormat === ImageFormat.jpg || this.imageFormat === ImageFormat.pjpg) {
            paramMap.set('q', this.quality);
        }

        if (this.backgroundColor) {
            paramMap.set('bg', `rgb:${this.backgroundColor}`);
        }

        switch (this.imageFormat) {
            case ImageFormat.pjpg:
                paramMap.set('fm', ImageFormat.jpg);
                paramMap.set('fl', 'progressive');
                break;
            case ImageFormat.png8:
                paramMap.set('fm', ImageFormat.png);
                paramMap.set('fl', 'png8');
                break;
            default:
                if (this.imageFormat !== ImageFormat.default) {
                    paramMap.set('fm', this.imageFormat);
                }
        }

        return Array.from(paramMap.keys()).reduce(
            (accumulator, current) => {
                const value = paramMap.get(current);

                if (!value) return accumulator;

                return `${accumulator}${accumulator === '' ? '?' : '&'}${current}=${value}`;
            },
            '',
        );
    }

    calculateDimensions(forceUpdate = false) {
        if (!BrowserCapabilities.isBrowser) return Promise.resolve();
        if (!this.inView && !forceUpdate) return Promise.resolve();

        return new Promise((resolve) => {
            window.requestAnimationFrame(() => {
                const rect = this.$el.getBoundingClientRect();
                const desiredWidth = Math.floor(rect.width * (window.devicePixelRatio || 1));
                const desiredHeight = Math.floor(rect.height * (window.devicePixelRatio || 1));

                if (this.resizeBehavior !== ResizeBehavior.default) {
                    this.width = desiredWidth > imageConstants.maxWidth ? imageConstants.maxWidth : desiredWidth;
                    this.height = desiredHeight > imageConstants.maxHeight ? imageConstants.maxHeight : desiredHeight;
                } else {
                    this.width = desiredWidth > imageConstants.maxWidth ? imageConstants.maxWidth : desiredWidth;
                }

                resolve();
            });
        });
    }

    @Watch('inView')
    async inViewWatcher(val:boolean) {
        if (!val || this.imageLoaded) { return; }

        await this.calculateDimensions();

        const imageToLoad = document.createElement('img');
        imageToLoad.src = this.imageUrl;
        imageToLoad.addEventListener('load', this.imageLoadHandler);
    }

    resizeHandler() {
        this.calculateDimensions();
    }

    imageLoadHandler() {
        this.imageLoaded = true;
    }
}
