import Vue from 'vue';

export default Vue.component('general-content', {
    name: 'general-content',
    template: require('./general-content.html'),
    props: {
        title: {
            type: String,
            required: true
        },
        text: {
            type: Array,
            required: true,
            default: []
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
});
