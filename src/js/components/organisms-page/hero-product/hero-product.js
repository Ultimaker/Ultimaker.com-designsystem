import Icon from 'atoms/icon';
import ContentLink from 'atoms/content-link';
import Currency from 'molecules/currency';
import CmsImage from 'organisms/cms-image';
export default {
    name: 'hero-product',
    template: require('./hero-product.html'),
    components: {
        Currency,
        CmsImage,
        ContentLink,
        Icon
    },
    props: {
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        link: {
            type: Array,
            required: false
        },
        image: {
            type: Array,
            required: true
        },
        materials: {
            type: Array,
            required: true
        },
        documents: {
            type: Array,
            required: false
        },
        labels: {
            type: Object,
            required: true
        }
    }
};
