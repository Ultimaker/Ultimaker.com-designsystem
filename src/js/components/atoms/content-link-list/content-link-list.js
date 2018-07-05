export default {
    name: 'content-link-list',
    template: require('./content-link-list.html'),
    props: {
        block: {
            type: String,
            required: true
        },
        links: {
            type: Array,
            default: () => []
        }
    }
};
