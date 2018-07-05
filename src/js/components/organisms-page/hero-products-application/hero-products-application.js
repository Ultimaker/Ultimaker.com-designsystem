export default {
    name: 'hero-products-application',
    template: require('./hero-products-application.html'),
    props: {
        title: {
            required: true,
            type: String
        },
        subtitle: {
            required: true,
            type: String
        },
        heroImage: {
            required: true,
            type: Object
        },
        productImage: {
            required: true,
            type: Object
        },
        uspIcons: {
            required: true,
            type: Array
        },
        description: {
            required: true,
            type: String
        },
        ctaLink: {
            required: true,
            type: Object
        },
        product: {
            required: false,
            type: Object
        },
        links: {
            required: false,
            type: Array
        }
    }
};
