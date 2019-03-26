import { Vue, Component, Prop } from 'vue-property-decorator';
import { IHeroBackgroundProps } from './hero-background.models';

@Component({
    name: 'hero-background',
    template: require('./hero-background.html'),
})

export default class HeroBackground extends Vue implements IHeroBackgroundProps {
    @Prop({ type: String, required: true }) title!: string;
    @Prop({ type: String, default: undefined }) description?: string;
    @Prop({ type: Object, required: true }) heroImage!: object;
    @Prop({ type: String, default: undefined }) videoId?: string;

    showVideo: boolean = false;

    public toggleVideo(): void {
        this.showVideo = !this.showVideo;
    }
}
