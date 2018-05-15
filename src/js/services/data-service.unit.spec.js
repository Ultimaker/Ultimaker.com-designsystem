/* eslint-disable max-nested-callbacks */
import ServiceDiscovery from './service-discovery';
import DataService from './data-service';
import fetchMock from 'fetch-mock';

describe('services', () => {
    describe('data-service', () => {
        const fixture = require('./data-service.unit.spec.json');

        afterEach(() => {
            fetchMock.restore();
        });

        it('should have a method getSiteData defined', () => {
            expect(DataService.getData).toBeDefined();
        });

        it('should retrieve data from a specific API', (done) => {
            spyOn(ServiceDiscovery, 'getService').and.returnValue(fixture.serviceDiscoveryResponse);
            fetchMock.get(/.*\/api\/some\/api$/, {
                headers: fixture.headers,
                body: fixture.dataServiceResponse
            });

            DataService.getData('myservice')
                .then((data) => {
                    expect(data).toBeDefined();
                    expect(data.testObject).toBeTruthy();
                    done();
                })
                .catch((err) => {
                    fail(`failed to get data ${ err }`);
                    done();
                });
        });

        it('should fail when api reply is invalid', (done) => {
            spyOn(ServiceDiscovery, 'getService').and.returnValue(fixture.serviceDiscoveryResponse);
            fetchMock.get(/.*\/api\/some\/api$/, 500);

            DataService.getData('myservice')
                .then(() => {
                    fail(`getSiteData should not resolve when response is invalid`);
                    done();
                })
                .catch((err) => {
                    expect(err.response.status).toEqual(500);
                    done();
                });
        });

        it('should replace templated force parse hal when specified', (done) => {
            spyOn(ServiceDiscovery, 'getService').and.returnValue(fixture.serviceDiscoveryTemplatedResponse);
            fetchMock.get(/.*\/api\/some\/api\/test$/, {
                headers: fixture.headers,
                body: fixture.dataServiceTemplatedResponse
            });

            const map = new Map([['param', 'test']]);

            DataService.getData('myservice', map, true)
                .then((data) => {
                    expect(data).toBeDefined();
                    expect(data.testObject[0].testProperty).toBeTruthy();

                    done();
                })
                .catch((err) => {
                    fail(`failed to get data ${ err }`);
                    done();
                });
        });

        it('should retrieve data from a specific API and parse it with an adapter', (done) => {
            spyOn(ServiceDiscovery, 'getService').and.returnValue(fixture.serviceDiscoveryResponse);
            fetchMock.get(/.*\/api\/some\/api$/, {
                headers: fixture.headers,
                body: fixture.dataServiceResponse
            });

            DataService.getDataWithAdapter('myservice', data => ({wrapper: data}))
                .then((data) => {
                    expect(data).toBeDefined();
                    expect(data.wrapper).toBeDefined();
                    expect(data.wrapper.testObject).toBeTruthy();
                    done();
                })
                .catch((err) => {
                    fail(`failed to get data ${ err }`);
                    done();
                });
        });
    });
});
