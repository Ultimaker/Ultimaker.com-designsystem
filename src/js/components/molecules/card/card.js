import ContentLink from 'atoms/content-link';
import ResponsivePicture from 'atoms/responsive-picture';
import Icon from 'atoms/icon';

export default {
    name: 'card',
    template: require('./card.html'),
    components: {
        ContentLink,
        Icon,
        ResponsivePicture
    },
    props: {
        block: {
            type: String,
            default: ''
        },
        card: {
            type: Object,
            default: () => ({})
        }
    },
    computed: {
        classObject() {
            const classes = {};

            if (this.block !== '') {
                classes[`${ this.block }__card`] = true;
            }

            return classes;
        }
    }
};
