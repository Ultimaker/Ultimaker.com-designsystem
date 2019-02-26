import ViewportUtil from 'utils/viewport';

export default {
    name: 'sub-nav',
    template: require('./sub-nav.html'),
    data: () => ({
        viewport: new ViewportUtil(),
        page: null
    }),
    computed: {
        classObject() {
            return {
                'sub-nav--collapsed': this.viewport.scrollY > 75 && this.viewport.scrollOffset > -75
            };
        }
    }
};

