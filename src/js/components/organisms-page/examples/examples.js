export default {
    name: 'examples',
    template: require('./examples.html'),
    data: () => ({
        enabled: false,
    }),
    props: {
        title: {
            type: String,
            required: true,
        },
        cards: {
            type: Array,
            required: true,
        },
        horizontalList: {
            type: Object,
        },
    },
    mounted() {
        // TODO: Fix weird card problem (breaking render in SSR,
        // see: http://localhost:8080/materials/ultimaker-pla)
        this.enabled = true;
    },
};
