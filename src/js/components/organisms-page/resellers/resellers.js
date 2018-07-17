export default {
    name: 'resellers',
    template: require('./resellers.html'),
    data: () => ({
        visibleAllAuthorizedResellers: false,
        visibleTooltipPreferred: false,
        showMax: 6
    }),
    props: {
        title: {
            type: String,
            required: true
        },
        tooltip: {
            type: String
        },
        resellers: {
            type: Array,
            required: true
        },
        labels: {
            type: Object,
            required: true
        }
    },
    methods: {
        showTooltipPreferred() {
            this.visibleTooltipPreferred = true;
        },
        hideTooltipPreferred() {
            this.visibleTooltipPreferred = false;
        },
        showAllAuthorizedResellers() {
            this.visibleAllAuthorizedResellers = true;
        }
    },
    computed: {
        resellersPreferred() {
            return this.resellers.filter(reseller => reseller.preferred === true);
        },
        resellersAuthorized() {
            return this.resellers.filter(reseller => reseller.preferred === false);
        }
    }
};
