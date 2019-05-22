export default {
    name: 'legacy-hero-product',
    template: require('./hero-product.html'),
    props: {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        link: {
            type: Array,
            required: false,
        },
        image: {
            type: Array,
            required: true,
        },
        materials: {
            type: Array,
            required: true,
        },
        documents: {
            type: Array,
            required: false,
        },
        labels: {
            type: Object,
            required: true,
        },
    },
};
