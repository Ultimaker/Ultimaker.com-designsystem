const noCountrySettings = {
    store: {
        modules: {
            page: {},
            navigation: {
                getters: {
                    mainNav: () => true,
                    minorNav: () => true,
                    legalNav: () => true
                }
            }
        }
    }
};

const countrySettings = {
    store: {
        modules: {
            page: {},
            navigation: {
                getters: {
                    mainNav: () => true,
                    minorNav: () => true,
                    legalNav: () => true
                }
            }
        },
        actions: {
            'PUSH_SETTINGS': () => Promise.resolve()
        }
    }
};

export {noCountrySettings, countrySettings};
