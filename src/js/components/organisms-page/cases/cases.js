import Viewport from 'utils/viewport';
import ResponsivePicture from 'atoms/responsive-picture';
import YoutubeVideo from 'atoms/youtube-video';
import Modal from 'molecules/modal';
import IconButton from 'molecules/icon-button';

export default {
    name: 'cases',
    components: {
        IconButton,
        ResponsivePicture,
        YoutubeVideo,
        Modal
    },
    template: require('./cases.html'),
    data: () => ({
        viewport: new Viewport(),
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
        },
        image: {
            type: Object,
            required: true
        }
    },
    computed: {
        isMobileXl() {
            return this.viewport.isMobileXl;
        }
    },
    methods: {
        toggleVideo() {
            this.showVideo = !this.showVideo;
        }
    }
};
