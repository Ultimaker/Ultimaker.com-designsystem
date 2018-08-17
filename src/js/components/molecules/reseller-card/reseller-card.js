export default {
    name: 'reseller-card',
    template: require('./reseller-card.html'),
    props: {
        image: {
            type: Object,
            default: () => ({})
        },
        name: {
            type: String,
            required: true
        },
        showroomCount: {
            type: Number
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
    },
    methods: {
        getShowroomLabel(amount) {
            return amount > 1 ? this.labels.multiShowroomLabel : this.labels.singleShowroomLabel;
        }
    }
};
