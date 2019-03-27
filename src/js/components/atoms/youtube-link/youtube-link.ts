import { Component, Prop } from 'vue-property-decorator';
import BaseLink from '../BaseLink';
import YoutubeConstants from 'constants/youtube';
import { YoutubeLink as YoutubeLinkInterface } from '@ultimaker/ultimaker.com-model-definitions/dist/atoms/cta/YoutubeLink';

@Component({
    name: 'YoutubeLink',
    template: require('./youtube-link.html'),
})
export default class YoutubeLink extends BaseLink implements YoutubeLinkInterface {
    @Prop({ type: String, default: 'play-video' }) icon!: YoutubeLinkInterface['icon'];
    @Prop({ type: String, required: true }) youtubeId!: YoutubeLinkInterface['youtubeId'];
    @Prop({ type: String, required: true }) label!: YoutubeLinkInterface['label'];
    @Prop({ type: Object, required: false }) clickEvent?: YoutubeLinkInterface['clickEvent'];

    videoVisible: boolean = false;

    get youtubeUrl(): string {
        return `${ YoutubeConstants.videoUrl }${ this.youtubeId }`;
    }

    toggleVideoVisible(): void {
        this.videoVisible = !this.videoVisible;
    }

    triggerClick(): void {
        this.toggleVideoVisible();
    }
}
