import Vue from 'vue';
import linkedProperty from 'mixins/linked-property';
import {mapGetters} from 'vuex';

export default Vue.component('hero-product', {
    name: 'hero-product',
    template: require('./hero-product.html'),
    mixins: [linkedProperty('materials')],
    props: {
        description: {
            type: String,
            required: true
        },
        documents: {
            type: Array,
            required: false
        },
        link: {
            type: Array,
            required: false
        },
        links: {
            type: Object,
            required: true
        },
        image: {
            type: Array,
            required: true
        }
    },
    computed: {
        ...mapGetters('page', ['page'])
    }
});
