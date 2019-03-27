import { Component, Prop, Vue } from 'vue-property-decorator';
import YoutubeConstants from 'constants/youtube';

@Component({
    name: 'youtube-video',
    template: require('./youtube-video.html'),
})

export default class YoutubeVideo extends Vue {
    @Prop({ type: String, required: true }) videoId!:string;

    loadVideo: boolean = false;

    get videoQuery() {
        return 'autoplay=1';
    }

    get videoUrl() {
        return `${ YoutubeConstants.embedUrl }${ this.videoId }?${ this.videoQuery }`;
    }

    mounted() {
        this.loadVideo = true;
    }
}
