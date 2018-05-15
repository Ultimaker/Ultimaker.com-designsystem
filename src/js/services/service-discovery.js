import FetchHelper from 'utils/fetch-helper';
import halParser from 'utils/hal-parser';
import Logger from 'utils/logger';
import Api from 'constants/api';
import {convertToAbsolute} from 'utils/url';

const serviceDirectory = {};
let serviceDirectoryPromise = null;

/**
 * Service Discovery exposes methods to resolve services from the service directory
 */
class ServiceDiscovery {
    /**
     * Retrieve a service from the service directory
     * @param {string} serviceName - name of the service
     * @returns {Promise.<Object>} service object
     */
    static async getService(serviceName) {
        const service = serviceDirectory[serviceName] || await this.queryServiceDirectory(serviceName);

        return service || null;
    }

    /**
     * Query the local and remote service directories for a service and update the local cache
     * @param {string} serviceName - name of the service
     * @returns {Promise.<Object>} service object
     */
    static async queryServiceDirectory(serviceName) {
        if (serviceDirectoryPromise === null) {
            serviceDirectoryPromise = FetchHelper.fetch(Api.services.globals.href)
                .then((response) => {
                    serviceDirectoryPromise = null;

                    return response.data;
                })
                .catch((ex) => {
                    Logger.logMessage('ServiceDirectory', `Cannot resolve globals: ${ ex.message }`, Logger.Levels.error);
                });
        }

        const data = await serviceDirectoryPromise;
        let globals = null,
            services = null;

        try {
            globals = halParser(data);
        } catch (ex) {
            throw new Error(`Failed to parse globals data: ${ ex.message }`);
        }

        // API.services: additional services defined in globals
        // globals.links: Services configured in API.services constants
        if (!globals || !globals.links) {
            services = Api.services;
        } else {
            services = Object.assign({}, Api.services, globals.links);
        }

        Object.keys(services).forEach((service) => {
            const serviceDefinition = Array.isArray(services[service]) ?
                services[service][0] : services[service];

            if (serviceDefinition && serviceDefinition.href) {
                serviceDefinition.href = convertToAbsolute(serviceDefinition.href, Api.ROOT);
                serviceDirectory[service] = serviceDefinition;
            }
        });

        return serviceDirectory[serviceName];
    }
}

export default ServiceDiscovery;
