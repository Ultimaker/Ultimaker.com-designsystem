exports.buildOptions = {
    props: {
        name: 'label-name'
    },
    store: {
        modules: {
            page: {
                getters: {
                    page: () => ({
                        labels: [
                            {
                                key: 'label-name',
                                value: 'label-value'
                            }
                        ]
                    })
                }
            }
        }
    }
};
