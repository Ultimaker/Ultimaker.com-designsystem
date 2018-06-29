import Vue from 'vue';

export default Vue.component('horizontal-list', {
    name: 'horizontal-list',
    template: require('./horizontal-list.html'),
    props: {
        styleModifier: {
            type: String
        },
        label: {
            type: String,
            required: true
        },
        listItems: {
            type: Array,
            required: true
        }
    }
});
