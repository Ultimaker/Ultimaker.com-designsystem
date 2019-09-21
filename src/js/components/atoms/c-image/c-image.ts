/** @format */
import { Component, Prop, Mixins } from 'vue-property-decorator';
import { CImageInterface, ResizeBehavior } from 'components/atoms/c-image/c-image.models';
import { FocusArea } from '@ultimaker/ultimaker.com-model-definitions/dist/atoms/media/Image';
import { InView } from 'js/mixins/in-view';
import { imageConstants } from './c-image.constants';
import WithRender from './c-image.vue.html';

@WithRender
@Component({
    name: 'c-image',
})
export default class CImage extends Mixins(InView) implements CImageInterface {
    @Prop({ type: String, required: true, default: '' }) public alt!: CImageInterface['alt'];
    @Prop({ type: String, required: false, default: FocusArea.center }) public focusArea?: CImageInterface['focusArea'];
    @Prop({ type: String, required: true }) public mimeType!: CImageInterface['mimeType'];
    @Prop({ type: String, required: false, default: ResizeBehavior.default }) public resizeBehavior!: ResizeBehavior;
    @Prop({ type: Number, required: false, default: 65 }) public quality!: number;
    @Prop({ type: String, required: true }) public url!: CImageInterface['url'];

    public height: number = 0;
    public imageError: boolean = false;
    public imageLoaded: boolean = false;
    public width: number = 0;

    public beforeMount(): void {
        this.setInViewOptions({ rootMargin: '-20px 0px 20px 0px' });
    }

    public mounted(): void {
        this.$el.addEventListener('load', this.imageLoadHandler);
    }

    public setError(): void {
        this.$emit('error');
        this.imageError = true;
    }

    public get classList(): {} {
        return {
            'img--loading': !this.inView || !this.imageLoaded,
        };
    }

    public get src(): string {
        return `${this.url}${this.getParams({ width: imageConstants.initialSize })}`;
    }

    public get srcset(): string {
        if (!this.inView) {
            return '';
        }

        return `
            ${this.url}${this.getParams({ width: 320 })} 320w,
            ${this.url}${this.getParams({ width: 480 })} 480w,
            ${this.url}${this.getParams({ width: 768 })} 768w,
            ${this.url}${this.getParams({ width: 1024 })} 1024w,
            ${this.url}${this.getParams({ width: 2048 })} 2048w
        `;
    }

    public getParams(options?: { width?: number; height?: number }): string {
        const elementWidth = this.width || imageConstants.initialSize;
        const elementHeight = this.height;

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const paramMap = new Map<string, any>([
            ['w', options && options.width ? options.width : elementWidth],
            ['h', options && options.height ? options.height : elementHeight],
            ['fit', this.resizeBehavior],
            ['f', this.focusArea],
        ]);

        return Array.from(paramMap.keys()).reduce(
            (accumulator, current): string => {
                const value = paramMap.get(current);

                if (!value) return accumulator;

                return `${accumulator}${accumulator === '' ? '?' : '&'}${current}=${value}`;
            },
            '',
        );
    }

    public imageLoadHandler(): void {
        this.imageLoaded = true;
    }
}
