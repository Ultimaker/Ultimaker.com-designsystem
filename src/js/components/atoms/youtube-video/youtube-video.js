import YoutubeConstants from 'constants/youtube';

const embedProps = {
    modestbranding: {
        type: Boolean,
        default: true
    },
    controls: {
        type: Boolean,
        default: true
    },
    jsapi: {
        type: Boolean,
        default: true
    },
    fullscreen: {
        type: Boolean,
        default: true
    },
    rel: {
        type: Boolean,
        default: false
    },
    playsinline: {
        type: Boolean,
        default: true
    },
    start: {
        type: Number
    },
    end: {
        type: Number
    }
};

export default {
    name: 'youtube-video',
    template: require('./youtube-video.html'),
    data: () => ({
        loadVideo: false
    }),
    props: {
        videoId: {
            type: String,
            required: true
        },
        ...embedProps
    },
    computed: {
        videoQuery() {
            const options = [];

            Object.keys(embedProps).forEach(key => {
                const value = this[key],
                    valueType = typeof value;

                if (valueType === 'boolean') {
                    options.push(`${ key }=${ ~~this[key] }`);
                } else if (valueType !== 'undefined') {
                    options.push(`${ key }=${ this[key] }`);
                }
            });

            return `autoplay=1&${ options.join('&') }`;
        },
        videoUrl() {
            return `${ YoutubeConstants.embedUrl }${ this.videoId }?${ this.videoQuery }`;
        }
    },
    mounted() {
        this.loadVideo = true;
    }
};
