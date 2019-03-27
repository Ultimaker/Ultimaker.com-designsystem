import { Component, Prop, Vue } from 'vue-property-decorator';
import YoutubeConstants from 'constants/youtube';

const embedProps = {
    modestbranding: {
        type: Boolean,
        default: true,
    },
    controls: {
        type: Boolean,
        default: true,
    },
    jsapi: {
        type: Boolean,
        default: true,
    },
    fullscreen: {
        type: Boolean,
        default: true,
    },
    rel: {
        type: Boolean,
        default: false,
    },
    playsinline: {
        type: Boolean,
        default: true,
    },
    start: {
        type: Number,
    },
    end: {
        type: Number,
    },
};
@Component({
    name: 'youtube-video',
    template: require('./youtube-video.html'),
    props: {
        ...embedProps,
    },
})
export default class YoutubeVideo extends Vue {
    @Prop({ type: String, required: true }) videoId!:string;

    loadVideo: boolean = false;

    get videoQuery() {
        const options:string[] = [];

        Object.keys(embedProps).forEach((key) => {
            const value = this[key];
            const valueType = typeof value;

            if (valueType === 'boolean') {
                options.push(`${ key }=${ ~~this[key] }`);
            } else if (valueType !== 'undefined') {
                options.push(`${ key }=${ this[key] }`);
            }
        });

        return `autoplay=1&${ options.join('&') }`;
    }

    get videoUrl() {
        return `${ YoutubeConstants.embedUrl }${ this.videoId }?${ this.videoQuery }`;
    }

    mounted() {
        this.loadVideo = true;
    }
}
