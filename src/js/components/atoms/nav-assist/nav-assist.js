export default {
    name: 'nav-assist',
    template: require('./nav-assist.html'),
    data: () => {
        return {
            used: false
        };
    },
    props: {
        openState: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        toggleState: function() {
            this.used = true;
            this.$emit('toggle');
        },
        close: function() {
            if (this.openState) {
                this.$emit('toggle');
            }
        }
    },
    watch: {
        openState() {
            this.used = true;
            this.$emit('used');
        }
    }
};
