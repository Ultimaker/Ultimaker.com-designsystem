export default {
    name: 'brands-large',
    template: require('./brands-large.html'),
    props: {
        title: {
            type: String,
            required: true,
        },
        text: {
            type: String,
        },
        brands: {
            type: Array,
            required: true,
        },
        contentLink: {
            type: Object,
        },
    },
};
