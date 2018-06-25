import ResponsivePicture from 'atoms/responsive-picture';

export default {
    name: 'brand-card',
    components: {
        ResponsivePicture
    },
    template: require('./brand-card.html'),
    props: {
        body: {
            type: String,
            default: ''
        },
        type: {
            type: String,
            default: 'quote'
        },
        image: {
            type: Object,
            default: () => ({})
        }
    }
};
