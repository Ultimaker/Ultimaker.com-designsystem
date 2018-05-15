import Vue from 'vue';

export default Vue.component('brand-card', {
    name: 'brand-card',
    template: require('./brand-card.html'),
    props: {
        body: {
            type: String,
            default: ''
        },
        type: {
            type: String,
            default: 'quote'
        },
        image: {
            type: Object,
            default: () => ({})
        }
    }
});
