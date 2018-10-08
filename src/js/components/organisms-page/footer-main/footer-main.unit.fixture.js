import Defaults from 'constants/defaults';

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
        },
        getters: {
            'detectedCountry': () => Defaults.country,
            'globalLabels': () => ({})
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
        getters: {
            '$settings': () => ({country: {
                'name': 'Netherlands',
                'code': 'NL',
                'currency': {
                    'code': 'EUR',
                    'symbol': '\u20ac'
                }
            }}),
            'detectedCountry': () => Defaults.country,
            'globalLabels': () => ({})
        },
        actions: {
            'PUSH_SETTINGS': () => Promise.resolve()
        }
    }
};

export {noCountrySettings, countrySettings};
