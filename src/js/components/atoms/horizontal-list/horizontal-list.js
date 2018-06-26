export default {
    name: 'horizontal-list',
    template: require('./horizontal-list.html'),
    props: {
        styleModifier: {
            type: String
        },
        label: {
            type: String,
            required: true
        },
        listItems: {
            type: Array,
            required: true
        }
    }
};
