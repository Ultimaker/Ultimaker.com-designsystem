import { Vue, Component, Prop } from 'vue-property-decorator';
import { HeroCoverProps } from './hero-cover.models';
import WithRender from './hero-cover.vue.html';

@WithRender
@Component({
    name: 'HeroCover',
})
export class HeroCover extends Vue implements HeroCoverProps {
    @Prop({ type: String, required: true }) title!: HeroCoverProps['title'];
    @Prop({ type: String, required: true }) description!: HeroCoverProps['description'];
    @Prop({ type: Object, required: false }) ctas?: HeroCoverProps['ctas'];
    @Prop({ type: Object, required: false }) image?: HeroCoverProps['image'];

    showVideo: boolean = false;

    public toggleVideo(): void {
        this.showVideo = !this.showVideo;
    }
}
