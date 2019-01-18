import { Component, Prop, Vue } from 'vue-property-decorator';
import { FocusArea, IImageProps, ImageFormat, ResizeBehavior } from 'components/atoms/image/image.models';

@Component({
    name: 'image',
    template: require('./image.html'),
})

export default class Image extends Vue implements IImageProps {
    @Prop({ type: String, required: true })
    imageSrc!: string;

    @Prop({ type: String, default: '' })
    description!: string;

    @Prop({ type: String, default: ImageFormat.jpg })
    imageFormat!: ImageFormat;

    @Prop({ type: String, default: ResizeBehavior.fill })
    resizeBehavior!: ResizeBehavior;

    @Prop({ type: String, default: FocusArea.center })
    focusArea!: FocusArea;

    @Prop({ type: Number, default: 0 })
    radius!: number;

    @Prop({ type: Number, default: 65 })
    quality!: number;

    @Prop({ type: String })
    backgroundColor: string | null = null;

    ready: boolean = false;
    loaded: boolean = false;
    width: number = 0;
    height: number = 0;

    get src() {
        if (this.ready && this.loaded) {
            return `${ this.imageSrc }${ this.params }`;
        }

        if (this.ready) {
            return 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==';
        }

        return '';
    }

    get params() {
        const params = {
            w: this.width,
            h: this.height,
            fit: this.resizeBehavior,
            f: this.focusArea,
        };

        if (this.radius < 0) {
            params['r'] = this.radius;
        }

        if (this.imageFormat === ImageFormat.jpg || this.imageFormat === ImageFormat.pjpg) {
            params['q'] = this.quality;
        }

        if (this.backgroundColor) {
            params['bg'] = `rgb:${ this.backgroundColor }`;
        }

        switch (this.imageFormat) {
            case ImageFormat.pjpg:
                params['fm'] = ImageFormat.jpg;
                params['fl'] = 'progressive';
                break;
            case ImageFormat.png8:
                params['fm'] = ImageFormat.png;
                params['fl'] = 'png8';
                break;
            default:
                params['fm'] = this.imageFormat;
        }

        return Object.keys(params).reduce(
            (accumulator, current, index, src) => {
                return `${ accumulator }${ index === 0 ? '?' : '&'}${ current }=${ src[current] }`;
            },
        );
    }

    beforeMount() {
        this.$el.addEventListener('load', () => {
            this.loaded = true;
        });
    }

    mounted() {
        this.ready = true;
    }
}
