import Vue from 'vue';

export default Vue.component('content-link', {
    name: 'content-link',
    template: require('./content-link.html'),
    props: {
        block: {
            type: String,
            default: ''
        },
        mod: {
            type: String,
            default: ''
        },
        icon: {
            type: String,
            default: ''
        },
        href: {
            type: String,
            default: ''
        }
    },
    computed: {
        /* eslint-disable complexity */
        /* - doesn't look complex to me */
        classObject() {
            const classes = {};

            if (this.block !== '') {
                classes[`${ this.block }__link`] = true;
            }
            if (this.mod !== '') {
                classes[`link--${ this.mod }`] = true;
            }
            if (this.icon !== '') {
                classes[`link--icon`] = true;
            }

            return classes;
        }
    }
});
