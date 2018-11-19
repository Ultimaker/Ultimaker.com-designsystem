import { Vue, Component, Prop } from 'vue-property-decorator';

@Component({
    name: 'hero-video',
    template: require('./hero-video.html'),
})

export default class HeroVideo extends Vue {
    @Prop({ type: String, required: true }) title?: string;
    @Prop({ type: String, required: true }) description?: string;
    @Prop({ type: Object, required: true }) heroImage?: Object;
    @Prop({ type: String, required: true }) videoId?: string;
    @Prop({ type: String, required: true }) buttonLabel?: string;
    @Prop({ type: String, required: true }) buttonIcon?: string;

    showVideo = false;

    public toggleVideo(): void {
        this.showVideo = !this.showVideo;
    }
}
