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
            return {
                'sub-nav--collapsed': this.viewport.scrollY > 75 && this.viewport.scrollOffset > -75
            };
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

