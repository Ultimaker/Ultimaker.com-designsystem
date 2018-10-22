/* eslint-disable max-nested-callbacks */
import PublicEventService from './public-event-service';

describe('services', () => {
    describe('PublicEventService', () => {
        it('should fire receive an fired event', (done) => {
            PublicEventService.on('fire-event', () => {
                done();
            });
            PublicEventService.emit('fire-event', {});
        });

        it('should log a fired event', (done) => {
            PublicEventService.emit('log-event', {});
            expect(PublicEventService.log('log-event').length).toEqual(1);

            setTimeout(() => {
                const date = Date.now() - 1;

                PublicEventService.emit('log-event', {});
                expect(PublicEventService.log('log-event', date).length).toEqual(1);
                done();
            }, 10);
        });
    });
});
