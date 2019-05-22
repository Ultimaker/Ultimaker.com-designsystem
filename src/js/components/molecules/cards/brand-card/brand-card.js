export default {
    name: 'brand-card',
    template: require('./brand-card.html'),
    props: {
        body: {
            type: String,
            default: '',
        },
        type: {
            type: String,
            default: 'quote',
        },
        image: {
            type: Object,
            default: () => ({}),
        },
    },
};
