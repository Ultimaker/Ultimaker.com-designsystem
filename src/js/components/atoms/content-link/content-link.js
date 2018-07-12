export default {
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
            if (this.mod !== '' && typeof this.mod === 'string') {
                this.mod.split(' ').forEach((mod) => {
                    classes[`link--${ mod }`] = true;
                });
            }
            if (this.icon !== '' && this.mod.indexOf('small') === -1) {
                classes[`link--icon`] = true;
            }

            return classes;
        }
    }
};
