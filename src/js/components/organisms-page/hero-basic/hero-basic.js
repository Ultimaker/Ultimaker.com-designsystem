export default {
    name: 'hero-basic',
    template: require('./hero-basic.html'),
    props: {
        title: {
            type: String,
            required: true
        },
        subtitle: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        links: {
            type: Array,
            required: false
        },
        image: {
            type: Array,
            required: true
        }
    }
};
