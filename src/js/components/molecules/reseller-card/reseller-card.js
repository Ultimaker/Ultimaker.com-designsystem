export default {
    name: 'reseller-card',
    template: require('./reseller-card.html'),
    props: {
        name: {
            type: String,
            required: true
        },
        preferred: {
            type: Boolean,
            default: false
        },
        href: {
            type: String,
            required: true
        },
        labels: {
            type: Object,
            required: true
        }
    }
};
