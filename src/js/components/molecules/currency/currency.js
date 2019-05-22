import Arithmetic from 'utils/arithmetic';

export default {
    name: 'currency',
    template: require('./currency.html'),
    props: {
        amount: {
            type: Number,
            required: true,
        },
        currencyType: {
            type: String,
        },
        decimals: {
            type: Number,
            default: 2,
        },
    },
    computed: {
        formattedAmount() {
            return Arithmetic.fixedNumber(this.amount, this.decimals);
        },
    },
};
