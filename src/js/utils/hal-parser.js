/* eslint-disable complexity */
import halfred from 'halfred';
import forEach from 'lodash/forEach';
import find from 'lodash/find';
import pickBy from 'lodash/pickBy';
import startsWith from 'lodash/startsWith';

/**
 * resolves link values by object key detection
 * @param {array} value - array of values
 * @param {string} key - key of link object
 * @returns {object|string} result
 */
function resolveLinkByKey(value, key) {
    switch (key) {
        case 'self':
        case 'image':
            return value[0];
        default:
            return value;
    }
}
/**
 * Flattens hal object and parse all embedded resources
 * @param {Object} resource - hal resource
 * @param {Object} [root] - the root object used as reference to resolve links to embedded resources (on the root)
 * @returns {Object} parsed object
 */
function parseHalObject(resource, root) {
    const data = pickBy(resource, (value, key) => !startsWith(key, '_') && typeof value !== 'function'),
        links = resource.allLinks();

    forEach(resource.allEmbeddedResources(), (value, key) => {
        if (Array.isArray(value)) {
            data[key] = value.map((item) => parseHalObject(item, root || resource));
        }
    });

    if (links !== null && Object.keys(links).length) {
        const _links = {};

        forEach(links, (value, key) => {
            const embedded = resource.embeddedInternalLink(key, root);

            if (embedded) {
                _links[key] = embedded;
            } else if (Array.isArray(value)) {
                _links[key] = resolveLinkByKey(value, key);
            }
        });
        data.links = _links;
    }

    return data;
}

/**
 * Parses json hal to javascript object
 * @param {Object} json - json hal
 * @returns {Object} parsed object
 */
const halParser = function(json) {
    if (typeof json === 'undefined') {
        return null;
    }

    const resource = halfred.parse(json);

    halfred.Resource.prototype.embeddedInternalLink = function(key, root) {
        const internalLink = (/^#([^/]+)\/(.+$)/),
            link = this.link(key);

        if (root && root.embeddedResourceArray && link.href && link.href.match && link.href.match(internalLink)) {
            const matches = link.href.match(internalLink),
                resourceType = matches[1];

            const resources = root.embeddedResourceArray(resourceType);
            const embeddedResource = find(resources, (r) => {
                const self = r.link('self');

                return self && self.href === link.href;
            });

            if (embeddedResource) { return parseHalObject(embeddedResource); }
        }

        return null;
    };

    return parseHalObject(resource);
};

export default halParser;
