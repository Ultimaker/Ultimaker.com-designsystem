import Vue from 'vue';
import { FocusArea } from '@ultimaker/ultimaker.com-model-definitions/dist/atoms/media/Image';
import { CImageDataInterface } from './c-image-data-interface';
import { ParamsOptionsInterface } from './params-options-interface';
import { ResizeBehavior } from './resize-behaviour-enum';

/**
 * this component uses the Contentful Images API, https://www.contentful.com/developers/docs/references/images-api/
 * to retrieve an image from contentful. it wraps the image in an `<intersect-observer>` component,
 * which “lazy loads” the component based a rootMargin of `100px 0px 100px 0px`. the `<intersect-observer>`
 * component disconnects the `intersectionobserver`, once the image has been intersected.
 */
export default Vue.component('CImage', {
    props: {
        alt: {
            default: '',
            required: true,
            type: String,
        },

        focusArea: {
            default: '',
            required: false,
            type: String,
            validator(value): boolean {
                if (value === '') {
                    return true;
                }

                return Object.keys(FocusArea).includes(value);
            },
        },

        resizeBehavior: {
            default: '',
            required: false,
            type: String,
            validator(value): boolean {
                if (value === '') {
                    return true;
                }

                return Object.values(ResizeBehavior).includes(value);
            },
        },

        sizes: {
            default: '100vw',
            required: false,
            type: String,
        },

        srcsetWidths: {
            default: (): number[] => [],
            required: false,
            type: Array,
        },

        url: {
            required: true,
            type: String,
        },
    },

    data(): CImageDataInterface {
        return {
            imageError: false,
            imageLoaded: false,
            placeholderImage: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
            intersected: false,
        };
    },

    computed: {
        getSrcset(): string {
            if (!this.intersected) {
                return '';
            }

            let result = `
                ${this.url}${this.getParams({ width: 320 })} 320w,
                ${this.url}${this.getParams({ width: 480 })} 480w,
                ${this.url}${this.getParams({ width: 640 })} 640w,
                ${this.url}${this.getParams({ width: 768 })} 768w,
                ${this.url}${this.getParams({ width: 960 })} 960w,
                ${this.url}${this.getParams({ width: 1024 })} 1024w,
                ${this.url}${this.getParams({ width: 2048 })} 2048w
            `;

            if (this.srcsetWidths.length > 0) {
                result = this.srcsetWidths.reduce(
                    // @ts-ignore
                    (acc: string, width: number): string => {
                        let srcset = acc;

                        srcset += `${this.url}${this.getParams({ width })} ${width}w,`;

                        return srcset;
                    },
                    '',
                ).slice(0, -1);
            }

            return result;
        },
    },

    methods: {
        errorHandler(): void {
            this.$emit('error', { $el: this.$el });
            this.imageError = true;
        },

        // @link https://www.contentful.com/developers/docs/references/images-api/
        getParams(options?: ParamsOptionsInterface): string {
            const paramMap = new Map<string, any>([
                ['f', this.focusArea],
                ['fit', this.resizeBehavior],
                ['fm', options && options.fm ? options.fm : undefined],
                ['h', options && options.height ? options.height : 0],
                ['w', options && options.width ? options.width : 0],
            ]);

            return Array.from(paramMap.keys()).reduce(
                (accumulator, current): string => {
                    const value = paramMap.get(current);

                    if (!value) {
                        return accumulator;
                    }

                    return `${accumulator}${accumulator === '' ? '?' : '&'}${current}=${value}`;
                },
                '',
            );
        },

        getSrc(): string {
            return this.placeholderImage;
        },

        intersectingHandler(): void{
            this.intersected = true;
        },

        loadHandler(): void {
            this.imageLoaded = true;
        },
    },
});
