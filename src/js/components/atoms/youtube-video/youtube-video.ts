import { Component, Prop, Vue } from 'vue-property-decorator';
import YoutubeConstants from 'constants/youtube';
import WithRender from './youtube-video.vue.html';

@WithRender
@Component({
    name: 'youtube-video',
})

export default class YoutubeVideo extends Vue {
    @Prop({ type: String, required: true }) videoId!:string;

    loadVideo: boolean = false;
    readonly videoQuery: string = 'autoplay=1';

    get videoUrl() {
        return `${YoutubeConstants.embedUrl}${this.videoId}?${this.videoQuery}`;
    }

    mounted() {
        this.loadVideo = true;
    }
}
