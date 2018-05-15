/* eslint-disable max-nested-callbacks */
import ServiceDiscovery from './service-discovery';
import PageService from './page-service';
import fetchMock from 'fetch-mock';

const pageResponse = {
    headers: {
        'Content-Type': 'applications/hal+json'
    },
    body: {
        _links: {
            self: {
                href: '/api/page/test'
            }
        },
        title: 'test'
    }
};

describe('services', () => {
    describe('PageService', () => {
        beforeEach(() => {
            fetchMock
                .get(/.*\/api\/pages\/home$/, pageResponse)
                .get(/.*\/api\/pages\/test$/, pageResponse)
                .get(/.*\/api\/pages\/non-existing-page$/, 404);

            spyOn(ServiceDiscovery, 'getService').and.returnValue({href: '/api/pages/{public-facing-path}', templated: true});
        });

        afterEach(() => {
            fetchMock.restore();
        });

        it('should have a method getPageForRoute defined', () => {
            expect(PageService.getPageForRoute).toBeDefined();
        });

        it('should get a page by path', (done) => {
            PageService.getPageForRoute('/test')
                .then((data) => {
                    expect(data.title).toEqual('test');
                    done();
                })
                .catch((err) => {
                    fail(`getPage has failed with error ${ err }`);
                    done();
                });
        });

        it('should fail retrieving a page which does not exists', (done) => {
            PageService.getPageForRoute('/non-existing-page')
                .then(() => {
                    fail('getPage should not resolve when a page is not found');
                    done();
                })
                .catch((err) => {
                    expect(err.response.status).toEqual(404);
                    done();
                });
        });
    });
});
