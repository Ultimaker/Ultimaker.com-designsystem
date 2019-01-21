import { Component, Prop, Vue } from 'vue-property-decorator';
import { FocusArea, IImageProps, ImageFormat, ResizeBehavior } from 'components/atoms/image/image.models';

@Component({
    name: 'c-image',
    template: require('./image.html'),
})

export default class Image extends Vue implements IImageProps {
    @Prop({ type: String, required: true })
    imageSrc!: string;

    @Prop({ type: String, default: '' })
    description!: string;

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
        const paramMap = new Map<string, any>([
            ['w', this.width],
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
            (accumulator, current, index, src) => {
                const value = paramMap.get(current);

                if (!value) return accumulator;

                return `${ accumulator }${ accumulator === '' ? '?' : '&'}${ current }=${ value }`;
            },
            '',
        );
    }

    mounted() {
        this.$el.addEventListener('load', () => {
            this.loaded = true;
        });
        this.ready = true;
    }
}
