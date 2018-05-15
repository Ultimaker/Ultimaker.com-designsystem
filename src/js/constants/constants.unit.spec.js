import ApiConstants from './api';


/* eslint-disable max-nested-callbacks */

describe('constants', () => {
    describe('api', () => {
        it('should have initial constants', () => {
            expect(ApiConstants.ROOT).toEqual('');
            expect(ApiConstants.services.globals.href).toEqual('/api/globals');
        });
    });
});
