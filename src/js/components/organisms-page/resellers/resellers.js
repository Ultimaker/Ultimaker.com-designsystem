export default {
    name: 'resellers',
    template: require('./resellers.html'),
    data: () => ({
        showAllPreferredResellers: false,
        showAllAuthorizedResellers: false,
        showTooltipPreferred: false,
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
    computed: {
        resellersPreferred() {
            return this.resellers.filter(reseller => reseller.preferred === true);
        },
        resellersAuthorized() {
            return this.resellers.filter(reseller => reseller.preferred === false);
        }
    }
};
