exports.buildOptions = {
    store: {
        modules: {
            page: {}
        },
        getters: {
            mainNav: () => true,
            minorNav: () => true,
            legalNav: () => true
        }
    }
};
