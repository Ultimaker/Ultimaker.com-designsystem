import { Vue, Component, Prop } from 'vue-property-decorator';
import { HeroCover as IHeroCover } from '@ultimaker/ultimaker.com-model-definitions/dist/organisms/hero/HeroCover';

@Component({
    name: 'hero-cover',
    template: require('./hero-cover.html'),
})

export default class HeroCover extends Vue implements IHeroCover {
    @Prop({ type: String, required: true }) title!:  IHeroCover['title'];
    @Prop({ type: String, required: true }) description!:  IHeroCover['description'];
    @Prop({ type: String }) subtitle?:  IHeroCover['subtitle'] | undefined;
    @Prop({ type: Array }) ctas?: IHeroCover['ctas'] | undefined;
    @Prop({ type: Object }) imageSmall?: IHeroCover['imageSmall'] | undefined;
    @Prop({ type: Object }) imageMedium?: IHeroCover['imageMedium'] | undefined;
    @Prop({ type: Object }) imageLarge?: IHeroCover['imageLarge'] | undefined;

    showVideo: boolean = false;

    public toggleVideo(): void {
        this.showVideo = !this.showVideo;
    }
}
