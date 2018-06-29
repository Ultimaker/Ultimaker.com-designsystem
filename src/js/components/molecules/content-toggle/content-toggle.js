import Vue from 'vue';

export default Vue.component('content-toggle', {
    name: 'content-toggle',
    template: require('./content-toggle.html'),
    props: {
        toggleState: {
            type: Boolean,
            default: false
        },
        expandedText: {
            type: String,
            default: 'Less'
        },
        collapsedText: {
            type: String,
            default: 'More'
        },
        expandedIcon: {
            type: String,
            default: 'angle-up'
        },
        collapsedIcon: {
            type: String,
            default: 'angle-down'
        }
    },
    computed: {
        toggleText() {
            return this.toggleState ? this.expandedText : this.collapsedText;
        },
        toggleIcon() {
            return this.toggleState ? this.expandedIcon : this.collapsedIcon;
        }
    },
    methods: {
        toggle() {
            this.toggleState = !this.toggleState;
            this.$emit('toggle');
        }
    }
});
