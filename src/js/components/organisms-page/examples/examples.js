import Vue from 'vue';

export default Vue.component('examples', {
    name: 'examples',
    template: require('./examples.html'),
    props: {
        title: {
            type: String,
            required: true
        },
        cards: {
            type: Array,
            required: true
        },
        horizontalList: {
            type: Object
        }
    }
});
