import { Vue, Component, Prop } from 'vue-property-decorator';
import ViewportUtil from 'utils/viewport';
import ResponsivePictureSource from './responsive-picture-source';

@Component({
    name: 'responsive-picture',
    template: require('./responsive-picture.html'),
    components: {
        ResponsivePictureSource,
    },
})
export default class ResponsivePicture extends Vue {
    @Prop({ type: [String, Object], required: false }) desktopHdWidth!: string|object;
    @Prop({ type: [String, Object], required: false }) desktopWidth!: string|object;
    @Prop({ type: [String, Object], required: false }) tabletWidth!: string|object;
    @Prop({ type: [String, Object], required: false }) mobileXlWidth!: string|object;
    @Prop({ type: [String, Object], required: false }) mobileLWidth!: string|object;
    @Prop({ type: [String, Object], required: true }) mobileWidth!: string|object;
    @Prop({ type: Boolean, required: false, default: true }) lazy!:boolean;
    @Prop({ type: String, required: false, default: '' }) description!:string;
    @Prop({ type: String, required: false, default: '' }) imgClass!:string;

    viewportUtil = new ViewportUtil();
    ready:boolean = false;
    inView:boolean = false;
    loaded:boolean = false;

    get lazyLoading() {
        return (this.lazy && !this.inView) || (!this.lazy && this.ready) || (!this.lazy);
    }

    get classes() {
        return {
            [this.imgClass]: true,
            'img--lazy': this.lazy,
            'img--loading': this.lazy && this.inView && !this.loaded,
            'img--loaded': this.loaded,
        };
    }

    calculateInView() {
        if (this.inView) { return; }
        const windowBottom = this.viewportUtil.scrollY + this.viewportUtil.screenHeight;
        const pictureBounds = this.$el.getBoundingClientRect();
        const pictureTop = this.viewportUtil.scrollY + pictureBounds.top;
        const pictureBottom = pictureTop + pictureBounds.height;

        this.inView = this.viewportUtil.scrollY <= pictureBottom && windowBottom >= pictureTop;
    }

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

        const img = this.$el.querySelector('img');
        if (img) {
            img.addEventListener('load', () => {
                this.loaded = true;
            });
        }
    }

    beforeDestroy() {
        if (this.lazy) {
            this.viewportUtil.removeResizeHandler(this.calculateInView);
            this.viewportUtil.removeScrollHandler(this.calculateInView);
        }
    }
}
