import { Component, Prop, Vue } from 'vue-property-decorator';
import YoutubeConstants from 'constants/youtube';
import { YoutubeLink as YoutubeLinkInterface } from '@ultimaker/ultimaker.com-model-definitions/dist/atoms/cta/YoutubeLink';
import WithRender from './youtube-link.vue.html';
import BaseLink from 'components/atoms/BaseLink/BaseLink.vue';

@WithRender
@Component({
    name: 'YoutubeLink',
    extends: BaseLink,
})
export class YoutubeLink extends Vue implements YoutubeLinkInterface {
    @Prop({ type: String, default: 'play-video' }) icon!: YoutubeLinkInterface['icon'];
    @Prop({ type: String, required: true }) youtubeId!: YoutubeLinkInterface['youtubeId'];
    @Prop({ type: String, required: true }) label!: YoutubeLinkInterface['label'];
    @Prop({ type: Object, required: false }) clickEvent?: YoutubeLinkInterface['clickEvent'];

    videoVisible: boolean = false;

    get youtubeUrl(): string {
        return `${YoutubeConstants.videoUrl}${this.youtubeId}`;
    }

    toggleVideoVisible(): void {
        this.videoVisible = !this.videoVisible;
    }

    triggerClick(): void {
        this.toggleVideoVisible();
    }
}
