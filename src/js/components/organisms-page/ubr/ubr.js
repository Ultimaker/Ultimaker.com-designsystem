import Vue from 'vue';

export default Vue.component('ubr', {
    name: 'ubr',
    template: require('./ubr.html'),
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
});
