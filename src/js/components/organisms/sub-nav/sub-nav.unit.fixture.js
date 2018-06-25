exports.buildOptions = {
    store: {
        modules: {
            page: {
                getters: {
                    pageLoading: () => false,
                    page: () => ({title: 'test'})
                }
            }
        }
    }
};
