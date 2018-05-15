/* eslint-disable max-nested-callbacks */
import FetchHelper from './fetch-helper';
import fetchMock from 'fetch-mock';

describe('utils', () => {
    describe('fetch-helper', () => {
        const jsonResponse = {
            headers: {
                'Content-Type': 'applications/hal+json'
            }
        };

        beforeEach(() => {
            fetchMock
                .get(/.*\/get$/, {
                    ...jsonResponse,
                    body: {
                        valid: true
                    }
                })
                .get(/.*\/reject$/, 500)
                .get(/.*\/api\/hal$/, {
                    ...jsonResponse,
                    body: {
                        valid: true,
                        _links: {
                            self: {
                                href: '/api/hal'
                            },
                            anotherThing: {
                                href: '/get'
                            }
                        }
                    }
                })
                .get(/.*\/api\/halfailedlink/, {
                    ...jsonResponse,
                    body: {
                        valid: true,
                        _links: {
                            self: {
                                href: '/api/halfailedlink'
                            },
                            anotherThing: {
                                href: '/reject'
                            }
                        }
                    }
                });
        });

        afterEach(() => {
            fetchMock.restore();
        });

        it('should contain a function fetch', () => {
            expect(FetchHelper.fetch).toEqual(jasmine.any(Function));
        });

        it('should return json on a get request', (done) => {
            FetchHelper.fetch('/get')
                .then(({data}) => {
                    expect(data.valid).toBeTruthy();
                    done();
                })
                .catch((err) => {
                    fail(`request was rejected ${ err }`);
                    done();
                });
        });

        it('should handle a get request rejection', (done) => {
            FetchHelper.fetch('/reject')
                .then(() => {
                    fail(`request should be rejected but wasn't`);
                    done();
                })
                .catch((err) => {
                    expect(err).toBeDefined();
                    done();
                });
        });
    });
});
