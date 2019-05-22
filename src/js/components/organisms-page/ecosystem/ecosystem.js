export default {
    name: 'ecosystem',
    template: require('./ecosystem.html'),
    props: {
        title: {
            type: String,
            required: false,
        },
        items: {
            type: Array,
            required: true,
        },
    },
};
