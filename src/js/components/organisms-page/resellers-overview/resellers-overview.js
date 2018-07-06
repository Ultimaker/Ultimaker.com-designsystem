import Vue from 'vue';

export default Vue.component('resellers-overview', {
    name: 'resellers-overview',
    template: require('./resellers-overview.html'),
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
        showMax: {
            type: Number,
            default: 6
        },
        showAllPreferredResellers: {
            type: Boolean,
            default: false
        },
        showAllAuthorizedResellers: {
            type: Boolean,
            default: false
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
});
