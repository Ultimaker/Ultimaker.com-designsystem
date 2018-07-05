export default {
    name: 'brands',
    template: require('./brands.html'),
    props: {
        title: {
            type: String,
            required: true
        },
        brands: {
            type: Array,
            required: true
        },
        contentLink: {
            type: Object
        }
    }
};
