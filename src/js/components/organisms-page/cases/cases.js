import Viewport from 'utils/viewport';

export default {
    name: 'cases',
    template: require('./cases.html'),
    data: () => ({
        viewport: new Viewport(),
        showVideo: false,
    }),
    props: {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        videoId: {
            type: String,
            required: true,
        },
        buttonLabel: {
            type: String,
            required: true,
        },
        buttonIcon: {
            type: String,
            required: true,
        },
        image: {
            type: Object,
            required: true,
        },
    },
    computed: {
        isMobileXl() {
            return this.viewport.isMobileXl;
        },
    },
    methods: {
        toggleVideo() {
            this.showVideo = !this.showVideo;
        },
    },
};
