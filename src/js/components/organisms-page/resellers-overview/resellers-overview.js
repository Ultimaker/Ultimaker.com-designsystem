import Vue from 'vue';

export default Vue.component('resellers-overview', {
    name: 'resellers-overview',
    template: require('./resellers-overview.html'),
    props: {
        title: {
            type: String,
            required: true
        },
        resellers: {
            type: Array,
            required: true
        }
    }
});
