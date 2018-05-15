/* eslint-disable max-nested-callbacks */
import ServiceDiscovery from './service-discovery';
import fetchMock from 'fetch-mock';

describe('services', () => {
    describe('ServiceDiscovery', () => {
        const fixture = require('./service-discovery.unit.spec.json');

        beforeEach(() => {
            fetchMock.get(/.*\/api\/globals$/, {
                headers: fixture.headers,
                body: fixture.globalResponse
            });
        });

        afterEach(() => {
            fetchMock.restore();
        });

        it('should resolve an existing service', (done) => {
            const servicePromise = ServiceDiscovery.getService('mockedService');

            servicePromise
                .then((service) => {
                    expect(service.href).toBeDefined();
                    done();
                })
                .catch((ex) => {
                    fail(`Error from getService ${ ex.message }`);
                    done();
                });
        });

        it('should resolve an existing templated service', (done) => {
            const servicePromise = ServiceDiscovery.getService('mockedTemplatedService');

            servicePromise
                .then((service) => {
                    expect(service.href).toBeDefined();
                    expect(service.templated).toBeTruthy();
                    done();
                })

                .catch((ex) => {
                    fail(`Error from getService ${ ex.message }`);
                    done();
                });
        });

        it('should resolve an non-existing server to null', (done) => {
            const servicePromise = ServiceDiscovery.getService('nonExistingService');

            servicePromise
                .then((service) => {
                    expect(service).toEqual(null);
                    done();
                })
                .catch((ex) => {
                    fail(`Error from getService ${ ex.message }`);
                    done();
                });
        });
    });
});
