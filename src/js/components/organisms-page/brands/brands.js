import BrandCard from 'molecules/brand-card';

export default {
    name: 'brands',
    components: {
        BrandCard
    },
    template: require('./brands.html'),
    props: {
        title: {
            type: String,
            required: true
        },
        brands: {
            type: Array,
            required: true
        },
        contentLink: {
            type: Object
        }
    }
};
