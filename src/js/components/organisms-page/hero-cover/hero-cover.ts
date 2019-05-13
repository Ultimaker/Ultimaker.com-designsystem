import { Vue, Component, Prop } from 'vue-property-decorator';
import { HeroCover as IHeroCover } from '@ultimaker/ultimaker.com-model-definitions/dist/organisms/hero/HeroCover';
import WithRender from './hero-cover.vue.html';

@WithRender
@Component({
    name: 'hero-cover',
})

export default class HeroCover extends Vue implements IHeroCover {
    @Prop({ type: String, required: true }) title!:  IHeroCover['title'];
    @Prop({ type: String, required: true }) description!:  IHeroCover['description'];
    @Prop({ type: Object }) ctas?: IHeroCover['ctas'] | undefined;
    @Prop({ type: Object }) image?: IHeroCover['image'] | undefined;

    showVideo: boolean = false;

    public toggleVideo(): void {
        this.showVideo = !this.showVideo;
    }
}
