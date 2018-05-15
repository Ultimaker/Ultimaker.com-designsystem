/* eslint-disable max-nested-callbacks */
/* eslint-disable complexity */
import {convertToAbsolute} from './url';
import Logger from 'utils/logger';

/**
 * Request library which wraps fetch and applies sanity checks
 *
 * Remark:  Be aware the isomorphicFetch is used to fetch when there is no native support, this happens
 *          be both on some browsers but also on nodejs (the server side renderer).
 */
class FetchHelper {
    /**
     * Executes a fetch request
     * @param {string} url - absolute url
     * @param {object} [fetchOptions] - https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
     * @returns {Promise} Resolves to json data
     */
    static async fetch(url, fetchOptions) {
        const options = Object.assign(fetchOptions || {}, {
                method: 'GET',
                redirect: 'follow',
                credentials: 'same-origin',
                cache: 'no-cache',
                headers: new Headers({
                    'Content-Type': 'application/json; charset=utf-8'
                })
            }),
            absoluteUrl = convertToAbsolute(url);

        try {
            const request = new Request(absoluteUrl, options),
                start = Date.now(),
                response = await fetch(request),
                duration = Date.now() - start;

            if (duration > 500) {
                Logger.logMessage('FetchHelper', `Long fetch operation: ${ absoluteUrl }, status: ${ response.status }, duration: ${ duration / 1000 }s`, Logger.Levels.warn);
            }

            if (response.status < 200 || response.status >= 300) {
                const error = new Error(response.statusText);

                error.response = response;

                throw error;
            }

            let data = null;
            const contentType = response.headers && response.headers.get('Content-Type');

            if ((/json/).test(contentType)) {
                data = await response.json();
            } else {
                data = await response.text();
            }

            return {
                response,
                data,
                absoluteUrl
            };
        } catch (error) {
            Logger.logException('FetchHelper', error, Logger.Levels.warn);

            if (error.response) {
                if (error.response.headers && (/json/).test(error.response.headers.get('Content-Type'))) {
                    error.errors = await error.response.json();
                } else {
                    error.errors = await error.response.text();
                }
            }
            throw error;
        }
    }
}

export default FetchHelper;
