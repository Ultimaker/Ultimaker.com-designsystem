import Arithmetic from 'utils/arithmetic';
import Vue from 'vue';

export default Vue.component('placeholder', {
    name: 'placeholder',
    template: require('./placeholder.html'),
    props: {
        width: {
            type: Number,
            required: true,
        },
        height: {
            type: Number,
            required: true,
        },
    },
    computed: {
        ratio() {
            const divisor = Arithmetic.greatestCommonDivisor(this.width, this.height);
            const ratioWidth = this.width / divisor;
            const ratioHeight = this.height / divisor;

            return `${ratioWidth}:${ratioHeight}`;
        },
    },
});
