import Vue from 'vue';

export default Vue.component('placeholder', {
    name: 'placeholder',
    template: require('./placeholder.html'),
    props: {
        width: {
            type: Number,
            required: true,
        },
        height: {
            type: Number,
            required: true,
        },
    },
});
