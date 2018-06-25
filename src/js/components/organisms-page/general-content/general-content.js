import ResponsivePicture from 'atoms/responsive-picture';
import ContentLink from 'atoms/content-link';

export default {
    name: 'general-content',
    template: require('./general-content.html'),
    components: {
        ContentLink,
        ResponsivePicture
    },
    props: {
        title: {
            type: String,
            required: true
        },
        text: {
            type: Array,
            required: true,
            default: () => []
        },
        reversed: {
            type: Boolean,
            default: false
        },
        contentLink: {
            type: Object
        },
        image: {
            type: Object
        }
    }
};
