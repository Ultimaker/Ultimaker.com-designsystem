import FetchHelper from 'utils/fetch-helper';
import halParser from 'utils/hal-parser';
import ServiceDiscovery from './service-discovery';

/**
 * Page service class containing all methods to retrieve page properties
 */
class PageService {
    /**
     * Retrieves a page with page components from the content API
     * @param {string} routeUrl - routeUrl of the page to retrieve
     * @returns {Promise.<Object>} resolves to object containing page and component objects
     */
    static async getPageForRoute(routeUrl) {
        const routeUrlParam = routeUrl.replace(/^\//, ''),
            pageApi = await ServiceDiscovery.getService('pages');

        if (!pageApi || !pageApi.href) {
            throw new Error(`Page service not found: 'pages'`);
        }

        const requestUrl = pageApi.templated ?
            pageApi.href.replace('{public-facing-path}', routeUrlParam) :
            `${ pageApi.href }/${ routeUrlParam }`;

        const response = await FetchHelper.fetch(requestUrl);
        let pageData = null;

        try {
            pageData = halParser(response.data);
        } catch (ex) {
            throw new Error(`Error parsing API page response for ${ routeUrl }: ${ ex.message }`);
        }

        return pageData;
    }
}

export default PageService;
