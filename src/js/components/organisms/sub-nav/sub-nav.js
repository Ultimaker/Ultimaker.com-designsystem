import Vue from 'vue';
import ViewportUtil from 'utils/viewport';
import {mapGetters} from 'vuex';

export default {
    name: 'sub-nav',
    template: require('./sub-nav.html'),
    data: () => ({
        viewport: new ViewportUtil()
    }),
    computed: {
        classObject() {
            const classes = {
                'sub-nav--collapsed': this.viewport.scrollY > 75 && this.viewport.scrollOffset > -75
            };

            return classes;
        },
        ...mapGetters('page', [
            'page',
            'pageLoading'
        ])
    },
    methods: {
        mapLink: (link) => link.replace(/^\/api\/pages/, '')
    }
};

