import Defaults from 'constants/defaults';

const noCountrySettings = {
    store: {
        modules: {
            page: {}
        },
        getters: {
            mainNav: () => true,
            minorNav: () => true,
            legalNav: () => true,
            $settings: () => ({country: null}),
            detectedCountry: () => Defaults.country
        }
    }
};

const countrySettings = {
    store: {
        modules: {
            page: {}
        },
        getters: {
            mainNav: () => true,
            minorNav: () => true,
            legalNav: () => true,
            $settings: () => ({country: {
                'name': 'Netherlands',
                'code': 'NL',
                'currency': {
                    'code': 'EUR',
                    'symbol': '\u20ac'
                }
            }}),
            detectedCountry: () => Defaults.country
        },
        actions: {
            'PUSH_SETTINGS': () => Promise.resolve()
        }
    }
};

export {noCountrySettings, countrySettings};
