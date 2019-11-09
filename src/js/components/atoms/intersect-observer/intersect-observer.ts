import Vue from 'vue';
import { IntersectObserverDataInterface } from './intersect-observer-data-interface';

/**
 * based on https://github.com/heavyy/vue-intersect
 *
 * intersection polyfill
 * since the `<intersect-observer>` component makes uses of the `intersectionpbserver`,
 * make sure to add a polyfill to the web server; e.g., https://www.npmjs.com/package/intersection-observer
 *
 * focus area
 * if a focus area is specified, make sure to add the `resize-behavior` attribute with a value, such as `fill`,
 * or other appropriate value, to the `c-image` element.
 */
export default Vue.component('IntersectObserver', {
    props: {
        disconnectAfterIntersect: {
            default: false,
            required: false,
            type: Boolean,
        },

        root: {
            default(): null {
                return null;
            },
            required: false,
            type: Object,
        },

        rootMargin: {
            default(): string {
                return '0px';
            },
            required: false,
            type: String,
        },

        threshold: {
            default(): number[] {
                return [0];
            },
            required: false,
            type: Array,
        },
    },

    data(): IntersectObserverDataInterface {
        return {
            error: false,
            observer: null,
        };
    },

    methods: {
        disconnect(): void {
            if (this.observer) {
                this.observer.disconnect();
                this.observer = null;
            }
        },

        intersectionHandler(entries: IntersectionObserverEntry[]): void {
            if (entries[0].isIntersecting) {
                this.$emit('intersecting', { target: entries[0].target });

                if (this.disconnectAfterIntersect) {
                    this.disconnect();
                    this.$emit('disconnect', { target: entries[0].target });
                }

                return;
            }

            this.$emit('not-intersecting', { target: entries[0].target });
        },
    },

    created(): void {
        let msg = '';

        if (this.$slots.default && this.$slots.default.length > 1) {
            this.error = true;
            msg = '[Intersect] you can only wrap one element in a <intersect> component';
        }

        if (!this.$slots.default || this.$slots.default.length < 1) {
            this.error = true;
            msg = '[Intersect] you must have one child inside a <intersect> component.';
        }

        if (!msg) {
            return;
        }

        if (!Vue.config.silent) {
            throw new Error(msg);
        }

        console.warn(msg);
    },

    destroyed(): void {
        if (!this.observer) {
            return;
        }

        this.observer.disconnect();
    },

    mounted(): void {
        if (this.error) {
            return;
        }

        this.observer = new IntersectionObserver(
            this.intersectionHandler,
            {
                root: this.root,
                rootMargin: this.rootMargin,
                threshold: this.threshold as number | number[],
            },
        );

        this.$nextTick((): void => {
            if (!this.observer) {
                return;
            }

            if (!this.$slots.default) {
                return;
            }

            if (!(this.$slots.default[0].elm instanceof Element)) {
                return;
            }

            this.observer.observe(this.$slots.default[0].elm);
        });
    },
});
