import { Vue, Component, Prop } from 'vue-property-decorator';
import { IEcosystem, IItem } from './ecosystem.models';

@Component({
    name: 'ecosystem',
    template: require('./ecosystem.html'),
})

export default class Ecosystem extends Vue implements IEcosystem {
    @Prop({ type: String, required: true }) title!: string;
    @Prop({ type: Array, required: true }) items!: IItem[];
    @Prop({ type: String, default: undefined }) videoId?: string;

    showVideo: boolean = false;

    public toggleVideo(): void {
        this.showVideo = !this.showVideo;
    }
}
