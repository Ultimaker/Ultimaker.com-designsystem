export default {
    name: 'examples',
    template: require('./examples.html'),
    props: {
        title: {
            type: String,
            required: true
        },
        cards: {
            type: Array,
            required: true
        },
        horizontalList: {
            type: Object
        }
    }
};
