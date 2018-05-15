/* eslint-disable complexity */

import FetchHelper from 'utils/fetch-helper';
import ServiceDiscovery from 'services/service-discovery';
import halParser from 'utils/hal-parser';
import Logger from 'utils/logger';

/**
 * Data service class containing all methods to retrieve data from a service
 */
class DataService {
    /**
     * Uses service discovery to retrieve service details and retrieves the data
     * @param {string} serviceName - Name of the service
     * @param {Map} templateReplacements - provided keys will be replaced if service is templated
     * @param {Boolean} forceHalParsing - If true, object always will be parsed by the hal parser
     * @returns {Promise.<Object>} object with data from service
     */
    static async getData(serviceName, templateReplacements = null, forceHalParsing = false) {
        const serviceApi = await ServiceDiscovery.getService(serviceName);

        if (!serviceApi || !serviceApi.href) {
            throw new Error(`Service not found: ${ serviceName }`);
        }

        let requestUrl = serviceApi.href;

        if (serviceApi.templated) {
            templateReplacements.forEach((value, key, map) => {
                requestUrl = requestUrl.replace(`{${ key }}`, value);
            });
        }

        let {data} = await FetchHelper.fetch(requestUrl);

        if (data && forceHalParsing) {
            try {
                data = halParser(data);
            } catch (ex) {
                Logger.logMessage('DataService', `Failed to parse data for ${ serviceName } service: ${ ex.message }`, Logger.Levels.warn);
            }
        }

        return data;
    }

    /**
     *
     * @param {string} serviceName - Name of the service
     * @param {Function} adapter - Adapter to parse data
     * @returns {Promise<{}>} object with data from service
     */
    static async getDataWithAdapter(serviceName, adapter) {
        const data = await this.getData(serviceName);

        if (typeof adapter !== 'function') {
            throw new Error('DataService adapter should implement a parse function');
        }

        return adapter(data);
    }
}

export default DataService;
