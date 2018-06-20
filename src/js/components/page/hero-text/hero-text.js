import Vue from 'vue';

export default Vue.component('hero-text', {
    name: 'hero-text',
    template: require('./hero-text.html'),
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
