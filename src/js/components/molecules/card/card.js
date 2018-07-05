export default {
    name: 'card',
    template: require('./card.html'),
    props: {
        block: {
            type: String,
            default: ''
        },
        card: {
            type: Object,
            default: () => ({})
        }
    },
    computed: {
        classObject() {
            const classes = {};

            if (this.block !== '') {
                classes[`${ this.block }__card`] = true;
            }

            return classes;
        }
    }
};
