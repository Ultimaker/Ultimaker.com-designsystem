import Vue from 'vue';

export default Vue.component('rich-text', {
    name: 'rich-text',
    template: require('./rich-text.html'),
    props: {
        title: {
            type: String,
            required: false
        },
        contents: {
            type: String,
            required: true
        }
    }
});
