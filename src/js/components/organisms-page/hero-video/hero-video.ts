import { Vue, Component, Prop } from 'vue-property-decorator';
import { IHeroVideoProps } from './hero-video.models';

@Component({
    name: 'hero-video',
    template: require('./hero-video.html'),
})

export default class HeroVideo extends Vue implements IHeroVideoProps {
    @Prop({ type: String, required: true, default: '' }) title!: string;
    @Prop({ type: String, required: true, default: '' }) description!: string;
    @Prop({ type: Object, required: true, default: {} }) heroImage!: object;
    @Prop({ type: String, required: true, default: '' }) videoId!: string;
    @Prop({ type: String, required: true, default: '' }) buttonLabel!: string;
    @Prop({ type: String, required: true, default: '' }) buttonIcon!: string;
    @Prop({ type: Boolean, default: false }) videoExist?: boolean;

    showVideo: boolean = false;

    public toggleVideo(): void {
        this.showVideo = !this.showVideo;
    }
}
