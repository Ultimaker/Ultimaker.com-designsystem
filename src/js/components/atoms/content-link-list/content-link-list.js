import Vue from 'vue';
import contentLink from  'atoms/content-link';

export default {
    name: 'content-link-list',
    components: {contentLink},
    template: require('./content-link-list.html'),
    props: {
        block: {
            type: String,
            required: true
        },
        links: {
            type: Array,
            default: () => []
        }
    }
};
