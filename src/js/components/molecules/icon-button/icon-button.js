import Icon from 'atoms/icon';

export default {
    name: 'icon-button',
    template: require('./icon-button.html'),
    components: {
        Icon
    },
    props: {
        buttonClass: {
            type: String
        },
        buttonAriaLabel: {
            type: String,
            default: ''
        },
        iconName: String
    },
    computed: {
        hasDefaultSlot() {
            return !!this.$slots.default;
        }
    },
    methods: {
        focus() {
            this.$el.focus();
        }
    }
};
