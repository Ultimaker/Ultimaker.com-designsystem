import Vue from 'vue';
import {mapGetters} from 'vuex';

const getLink = (links) => {
    if (!links || !links.item || !links.item.length) {
        return null;
    }

    return links.item[0].href;
};

export default Vue.component('footer-main', {
    name: 'footer-main',
    template: require('./footer-main.html'),
    data: () => ({
        year: (new Date()).getFullYear(),
        subscribeOpen: false
    }),
    computed: {
        ...mapGetters(['minorNav', 'legalNav'])
    },
    methods: {
        mapLinks: (linkList) => linkList.map(link => ({
            title: link.title,
            href: getLink(link.links) || '#'
        }))
    }
});
