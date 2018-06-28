import Arithmetic from 'utils/arithmetic';

export default {
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
};
