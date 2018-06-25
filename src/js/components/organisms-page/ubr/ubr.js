import Vue from 'vue';
import ResponsivePicture from 'atoms/responsive-picture';

export default {
    name: 'ubr',
    template: require('./ubr.html'),
    components: {
        ResponsivePicture
    },
    props: {
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        image: {
            type: Array,
            required: true
        },
        reasons: {
            type: Array,
            required: true
        }
    }
};
