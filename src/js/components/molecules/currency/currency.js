import Vue from 'vue';
import Arithmetic from 'utils/arithmetic';

export default Vue.component('currency', {
    name: 'currency',
    template: require('./currency.html'),
    props: {
        amount: {
            type: Number,
            required: true
        },
        currencyType: {
            type: String,
            default: '$'
        },
        decimals: {
            type: Number,
            default: 2
        }
    },
    computed: {
        formattedAmount: function() {
            return Arithmetic.fixedNumber(this.amount, this.decimals);
        }
    }
});
