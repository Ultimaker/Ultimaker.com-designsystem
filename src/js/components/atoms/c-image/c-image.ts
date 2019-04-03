import { Component, Prop, Vue, Watch, Mixins } from 'vue-property-decorator';
import { FocusArea, ICImageProps, ImageFormat, ResizeBehavior } from 'components/atoms/c-image/c-image.models';
import { InView } from 'js/mixins/in-view';
import BrowserCapabilities from 'utils/browser-capabilities';
import ViewportUtil from 'utils/viewport';
import { imageConstants } from './c-image.constants';

@Component({
    name: 'c-image',
    template: require('./c-image.html'),
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
    thumbnailLoaded: boolean = false;
    imageLoaded: boolean = false;
    ready:boolean = false;
    width: number = 0;
    height: number = 0;

    async mounted() {
        if (!BrowserCapabilities.isBrowser) return;

        this.viewportUtil.addResizeHandler(this.resizeHandler);

        await this.calculateDimensions(true);
        this.ready = true;

        this.$el.addEventListener('load', this.thumbnailLoadHandler);
    }

    beforeDestroy() {
        this.viewportUtil.removeResizeHandler(this.resizeHandler);
        this.viewportUtil.removeScrollHandler(this.resizeHandler);
    }

    get classList() {
        return {
            'img--loading': !this.inView || !this.imageLoaded,
        };
    }

    get src() {
        if (!this.ready) {
            return imageConstants.tinyGif;
        }

        return this.imageLoaded && this.inView ? this.imageUrl : this.thumbUrl;
    }

    get imageUrl() {
        return `${ this.url }${ this.getParams({}) }`;
    }

    get thumbUrl() {
        if (this.resizeBehavior !== ResizeBehavior.default) {
            const cropFactor = this.width > this.height ? this.width / imageConstants.initialSize : this.height / imageConstants.initialSize;
            const height = Math.round(this.height / cropFactor);
            const width = Math.round(this.width / cropFactor);

            return `${ this.url }${ this.getParams({ width, height  }) }`;
        }

        return `${ this.url }${ this.getParams({ width: imageConstants.initialSize }) }`;
    }

    getParams(options?: {width?: number, height?: number}) {
        const paramMap = new Map<string, any>([
            ['w', options && options.width ? options.width : this.width],
            ['h', options && options.height ? options.height : this.height],
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

                return `${ accumulator }${ accumulator === '' ? '?' : '&'}${ current }=${ value }`;
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
        if (! val || this.imageLoaded) { return; }

        await this.calculateDimensions();

        const imageToLoad = document.createElement('img');
        imageToLoad.src = this.imageUrl;
        imageToLoad.addEventListener('load', this.imageLoadHandler);
    }

    resizeHandler() {
        this.calculateDimensions();
    }

    thumbnailLoadHandler() {
        this.$el.removeEventListener('load', this.thumbnailLoadHandler);
        this.thumbnailLoaded = true;
    }

    imageLoadHandler() {
        this.imageLoaded = true;
    }
}
