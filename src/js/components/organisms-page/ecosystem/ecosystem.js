import Card from 'molecules/card';

export default {
    name: 'ecosystem',
    template: require('./ecosystem.html'),
    components: {
        Card
    },
    props: {
        title: {
            type: String,
            required: false
        },
        items: {
            type: Array,
            required: true
        }
    }
};
