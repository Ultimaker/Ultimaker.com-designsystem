<template>
    <img
        class="img--contain"
        :sizes="sizes"
        :alt="alt"
        :class="classList"
        :src="tinyGif"
        :srcset="srcset"
        @error="setError"
    />
</template>

<script lang="ts">
    import Vue from 'vue';
    import BrowserCapabilities from '../../../utils/browser-capabilities';
    import ViewportUtil from '../../../utils/viewport';
    import { ResizeBehavior } from 'components/atoms/c-image/c-image.models';
    import { FocusArea } from '@ultimaker/ultimaker.com-model-definitions/dist/atoms/media/Image';

    interface CImageDataInterface {
        height: number;
        imageError: boolean;
        imageLoaded: boolean;
        initialSize: number;
        inView: boolean;
        inViewObserver?: null | IntersectionObserver;
        inViewOptions: undefined | IntersectionObserverInit;
        tinyGif: string;
        viewportUtil: ViewportUtil;
        width: 0;
    }

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

            mimeType: {
                required: true,
                type: String,
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

            quality: {
                default: 65,
                required: false,
                type: Number,
            },

            sizes: {
                default: '100vw',
                required: false,
                type: String,
            },

            url: {
                required: true,
                type: String,
            },
        },

        data(): CImageDataInterface {
            return {
                height: 0,
                imageError: false,
                imageLoaded: false,
                initialSize: 20,
                inView: false,
                inViewObserver: null,
                inViewOptions: { rootMargin: '-100px 0px 100px 0px' },
                tinyGif: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
                viewportUtil: new ViewportUtil(),
                width: 0,
            };
        },

        computed: {
            classList(): {} {
                return {
                    'img--loading': !this.inView || !this.imageLoaded,
                };
            },

            src(): string {
                return `${this.url}${this.getParams({ width: this.initialSize })}`;
            },

            srcset(): string {
                if (!this.inView) {
                    return '';
                }

                return `
                ${this.url}${this.getParams({ width: 60 })} 60w,
                ${this.url}${this.getParams({ width: 180 })} 180w,
                ${this.url}${this.getParams({ width: 320 })} 320w,
                ${this.url}${this.getParams({ width: 480 })} 480w,
                ${this.url}${this.getParams({ width: 500 })} 500w,
                ${this.url}${this.getParams({ width: 768 })} 768w,
                ${this.url}${this.getParams({ width: 1024 })} 1024w,
                ${this.url}${this.getParams({ width: 2048 })} 2048w
            `;
            },
        },

        beforeDestroy(): void {
            this.removeObservers();
        },

        mounted(): void {
            this.$el.addEventListener('load', this.imageLoadHandler);

            if (!BrowserCapabilities.supportsIntersectionObserver) {
                this.viewportUtil.addResizeHandler(this.intersectionPolyHandler);
                this.viewportUtil.addScrollHandler(this.intersectionPolyHandler);

                return;
            }

            this.inViewObserver = new IntersectionObserver(this.intersectionHandler, this.inViewOptions);
            this.inViewObserver.observe(this.$el);
        },

        methods: {
            getParams(options?: { width?: number; height?: number }): string {
                const elementWidth = this.width || this.initialSize;
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
            },

            imageLoadHandler(): void {
                this.imageLoaded = true;
            },

            // @link https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
            intersectionHandler(entries: IntersectionObserverEntry[]): void {
                if (entries.length) {
                    const entry = entries.slice(-1)[0];
                    this.setInView(entry.isIntersecting);
                }
            },

            intersectionPolyHandler(): void {
                const windowBottom = this.viewportUtil.scrollY + this.viewportUtil.screenHeight;
                const pictureBounds = this.$el.getBoundingClientRect();
                const pictureTop = this.viewportUtil.scrollY + pictureBounds.top;
                const pictureBottom = pictureTop + pictureBounds.height;

                this.setInView(this.viewportUtil.scrollY <= pictureBottom && windowBottom >= pictureTop);
            },

            removeObservers(): void {
                if (this.inViewObserver) {
                    this.inViewObserver.unobserve(this.$el);
                } else {
                    this.viewportUtil.removeResizeHandler(this.intersectionPolyHandler);
                    this.viewportUtil.removeScrollHandler(this.intersectionPolyHandler);
                }
            },

            setError(): void {
                this.$emit('error');
                this.imageError = true;
            },

            setInView(inView): void {
                if (this.inView) {
                    this.removeObservers();
                    return;
                }

                this.inView = inView;
            },
        },
    });
</script>
