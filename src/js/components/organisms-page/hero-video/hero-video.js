export default {
    name: 'hero-video',
    template: require('./hero-video.html'),
    data: () => ({
        showVideo: false
    }),
    props: {
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        heroImage: {
            required: true,
            type: Object
        },
        videoId: {
            type: String,
            required: true
        },
        buttonLabel: {
            type: String,
            required: true
        },
        buttonIcon: {
            type: String,
            required: true
        }
    },
    methods: {
        toggleVideo() {
            this.showVideo = !this.showVideo;
        }
    }
};
