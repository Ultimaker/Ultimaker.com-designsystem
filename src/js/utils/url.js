import startsWith from 'lodash/startsWith';

export function getHost() {
    return typeof window !== 'undefined' ? location.host : `127.0.0.1:${ process.env.PORT || 8080 }`;
}

export function getProtocol() {
    return typeof window !== 'undefined' ? location.protocol : 'http:';
}

export function convertToAbsolute(url, prefix) {
    if (!startsWith(url, '/')) {
        return url;
    }

    if (prefix) {
        return `${ prefix }${ url }`;
    }

    return `${ getProtocol() }//${ getHost() }${ url }`;
}
