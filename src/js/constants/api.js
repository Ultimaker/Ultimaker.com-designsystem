function getApiRootUrl(apiType, fallback) {
    if (process.BROWSER && window.$u && window.$u[apiType]) {
        return window.$u[apiType];
    } else if (!process.BROWSER && process.env[apiType]) {
        return process.env[apiType];
    }

    return fallback;
}

const API_ROOT = getApiRootUrl('API', '');
const GEOIP_API = getApiRootUrl('GEOIP_API', '');

const API = {
    'ROOT': API_ROOT || '',
    'services': {
        'globals': {
            'href': `${ API_ROOT }/api/globals`
        },
        'country-detection': {
            'templated': true,
            'href': `${ GEOIP_API }/api/country/{ip}`
        }
    }
};

export default API;
