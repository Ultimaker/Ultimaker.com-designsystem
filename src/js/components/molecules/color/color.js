import Vue from 'vue';


export default Vue.component('color', {
    name: 'color',
    template: require('./color.html'),
    props: {
        background: {
            type: String,
            default: ''
        }
    },
    methods: {
        lightness(color) {
            const expression = (/^#([A-Fa-f0-9]{2})([A-Fa-f0-9]{2})([A-Fa-f0-9]{2})/),
                matches = (color && color.match) ? color.match(expression) : false;

            if (!matches || matches.length !== 4) { return 0; }

            return parseInt(matches[1], 16) +
                parseInt(matches[2], 16) +
                parseInt(matches[3], 16);
        }
    },
    computed: {
        styleBackground() {
            const styles = {};

            if (this.background !== '') {
                styles[`background`] = this.background;
            }

            return styles;
        },
        styleIcon() {
            const breakpoint = 382.5;
            const styles = {};

            if (this.background === '') {
                styles[`color`] = 'black';

                return styles;
            }
            styles[`color`] = this.lightness(this.background) >= breakpoint ? 'black' : 'white';

            return styles;
        }
    }
});

