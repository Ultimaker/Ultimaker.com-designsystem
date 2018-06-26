import Vue from 'vue';
import ViewportUtil from 'utils/viewport';
import ResponsivePictureSource from './responsive-picture-source';

export default {
    name: 'responsive-picture',
    components: {
        ResponsivePictureSource
    },
    template: require('./responsive-picture.html'),
    data: () => ({
        viewportUtil: new ViewportUtil(),
        ready: false,
        inView: false,
        loaded: false
    }),
    props: {
        desktopHdWidth: {
            required: false
        },
        desktopWidth: {
            required: false
        },
        tabletWidth: {
            required: false
        },
        mobileXlWidth: {
            required: false
        },
        mobileLWidth: {
            required: false
        },
        mobileWidth: {
            required: true
        },
        lazy: {
            type: Boolean,
            default: true
        },
        description: {
            type: String,
            default: ''
        },
        imgClass: {
            type: String,
            default: ''
        }
    },
    computed: {
        lazyLoading() {
            return (this.lazy && !this.inView) || (!this.lazy && this.ready);
        },
        classes() {
            return {
                [this.imgClass]: true,
                'img--lazy': this.lazy,
                'img--loading': this.lazy && this.inView && !this.loaded,
                'img--loaded': this.loaded
            };
        }
    },
    methods: {
        calculateInView() {
            if (this.inView === true) { return; }
            const windowBottom = this.viewportUtil.scrollY + this.viewportUtil.screenHeight,
                pictureBounds = this.$el.getBoundingClientRect(),
                pictureTop = this.viewportUtil.scrollY + pictureBounds.top,
                pictureBottom = pictureTop + pictureBounds.height;

            this.inView = this.viewportUtil.scrollY <= pictureBottom && windowBottom >= pictureTop;
        }
    },
    mounted() {
        window.requestAnimationFrame(() => {
            this.ready = true;
        });

        if (!this.lazy) {
            this.inView = true;

            return;
        }
        if (this.lazy) {
            this.calculateInView();
            this.viewportUtil.addResizeHandler(this.calculateInView);
            this.viewportUtil.addScrollHandler(this.calculateInView);
        }

        this.$el.querySelector('img').addEventListener('load', () => {
            this.loaded = true;
        });
    },
    beforeDestroy() {
        if (this.lazy) {
            this.viewportUtil.removeResizeHandler(this.calculateInView);
            this.viewportUtil.removeScrollHandler(this.calculateInView);
        }
    }
};
