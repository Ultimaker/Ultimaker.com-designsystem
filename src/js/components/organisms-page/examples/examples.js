import HorizontalList from 'atoms/horizontal-list';
import Card from 'molecules/card';

export default {
    name: 'examples',
    template: require('./examples.html'),
    components: {
        HorizontalList,
        Card
    },
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
