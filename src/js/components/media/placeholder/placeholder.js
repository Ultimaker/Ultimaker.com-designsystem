import Vue from 'vue';
import Arithmetic from 'utils/arithmetic';

export default Vue.component('placeholder', {
    name: 'placeholder',
    template: require('./placeholder.html'),
    props: {
        width: {
            type: Number,
            required: true
        },
        height: {
            type: Number,
            required: true
        }
    },
    computed: {
        ratio: function() {
            const divisor = Arithmetic.greatestCommonDivisor(this.width, this.height),
                ratioWidth = this.width / divisor,
                ratioHeight = this.height / divisor;

            return `${ ratioWidth }:${ ratioHeight }`;
        }
    }
});
