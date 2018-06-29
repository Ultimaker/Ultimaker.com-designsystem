import Arithmetic from 'utils/arithmetic';
import Vue from 'vue';

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
