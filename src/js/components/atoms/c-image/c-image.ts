import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import { FocusArea, ICImageProps, ImageFormat, ResizeBehavior } from 'components/atoms/c-image/c-image.models';
import BrowserCapabilities from 'utils/browser-capabilities';
import ViewportUtil from 'utils/viewport';
import { imageConstants } from './c-image.constants';

@Component({
    name: 'c-image',
    template: require('./c-image.html'),
})

export default class CImage extends Vue implements ICImageProps {
    @Prop({ type: String, required: true })
    url!: string;

    @Prop({ type: String, default: '' })
    alt!: string;

    @Prop({ type: Boolean, default: true })
    keepInView!: boolean;

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
    backgroundColor!: string | null ;

    viewportUtil = new ViewportUtil();
    thumbnailLoaded: boolean = false;
    imageLoaded: boolean = false;
    inView: boolean = false;

    width: number = 0;
    height: number = 0;

    get classList() {
        return {
            'img--loading': !this.inView || !this.imageLoaded,
        };
    }

    get src() {
        return this.imageLoaded && this.inView ? this.imageUrl : this.thumbUrl;
    }

    get imageUrl() {
        return `${ this.url }${ this.getParams({}) }`;
    }

    get thumbUrl() {
        return `${ this.url }${ this.getParams({ width: imageConstants.initialWidth }) }`;
    }

    getParams(options?: {width?: number}) {
        const paramMap = new Map<string, any>([
            ['w', options && options.width ? options.width : this.width],
            ['h', this.height],
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

    calculateInView() {
        if (this.inView && this.keepInView) { return; }
        const windowBottom = this.viewportUtil.scrollY + this.viewportUtil.screenHeight;
        const pictureBounds = this.$el.getBoundingClientRect();
        const pictureTop = this.viewportUtil.scrollY + pictureBounds.top;
        const pictureBottom = pictureTop + pictureBounds.height;

        this.inView = this.viewportUtil.scrollY <= pictureBottom && windowBottom >= pictureTop;
    }

    calculateDimensions() {
        if (!BrowserCapabilities.isBrowser) return Promise.resolve();
        if (!this.inView) return Promise.resolve();

        return new Promise((resolve) => {
            window.requestAnimationFrame(() => {
                const rect = this.$el.getBoundingClientRect();
                const desiredWidth = rect.width * (window.devicePixelRatio || 1);

                this.width = desiredWidth > imageConstants.maxWidth ? imageConstants.maxWidth : Math.floor(desiredWidth);
                resolve();
            });
        });
    }

    @Watch('inView')
    async onInView(val:boolean) {
        if (! val) {
            return;
        }

        await this.calculateDimensions();
        const imageToLoad = document.createElement('img');
        imageToLoad.src = this.imageUrl;
        imageToLoad.addEventListener('load', this.onImageLoad);
    }

    resizeHandler() {
        this.calculateInView();
        this.calculateDimensions();
    }

    scrollHandler() {
        this.calculateInView();
    }

    async onThumbnailLoad(e) {
        this.thumbnailLoaded = true;
    }

    async onImageLoad(e) {
        this.imageLoaded = true;
    }

    mounted() {
        if (!BrowserCapabilities.isBrowser) return;

        window.requestAnimationFrame(() => {
            this.calculateInView();
            this.viewportUtil.addResizeHandler(this.resizeHandler);
            this.viewportUtil.addScrollHandler(this.scrollHandler);
        });

        this.$el.addEventListener('load', this.onThumbnailLoad);
    }

    beforeDestroy() {
        this.viewportUtil.removeResizeHandler(this.resizeHandler);
        this.viewportUtil.removeScrollHandler(this.resizeHandler);
    }
}
