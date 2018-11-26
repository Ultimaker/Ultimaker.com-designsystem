import { Vue, Component, Prop } from 'vue-property-decorator';
import { IHeroVideoProps } from './hero-video.models';

@Component({
    name: 'hero-video',
    template: require('./hero-video.html'),
})

export default class HeroVideo extends Vue implements IHeroVideoProps {
    @Prop({ type: String, required: true }) title!: string;
    @Prop({ type: String, default: undefined }) description?: string;
    @Prop({ type: Object, required: true }) heroImage!: object;
    @Prop({ type: String, default: undefined }) videoId?: string;

    showVideo: boolean = false;

    public toggleVideo(): void {
        this.showVideo = !this.showVideo;
    }
}
