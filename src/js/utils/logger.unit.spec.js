/* eslint-disable max-nested-callbacks */
import Logger from './logger';

describe('utils', () => {
    describe('logger', () => {
        it('should log a message to the default "info" verbosity level', () => {
            const loggedMessage = 'Things could be very complicated';

            spyOn(console, 'info');

            Logger.logMessage('unit', loggedMessage);
            expect(console.info).toHaveBeenCalledTimes(1);
            expect(console.info).toHaveBeenCalledWith(`unit: ${ loggedMessage }`);
        });

        it('should log a message to an other verbosity level', () => {
            const loggedMessage = 'Things could be very complicated';

            spyOn(console, 'error');

            Logger.logMessage('unit', loggedMessage, Logger.Levels.error);
            expect(console.error).toHaveBeenCalledTimes(1);
            expect(console.error).toHaveBeenCalledWith(`unit: ${ loggedMessage }`);
        });

        it('should log an exception to the default "info" verbosity level', () => {
            const loggedException = {
                message: 'Things could be very complicated'
            };

            spyOn(console, 'info');

            Logger.logException('unit', loggedException);
            expect(console.info).toHaveBeenCalledTimes(1);
            expect(console.info).toHaveBeenCalledWith(`unit: ${ loggedException.message }`);
        });

        it('should log an exception to an other verbosity level', () => {
            const loggedException = {
                message: 'Things could be very complicated'
            };

            spyOn(console, 'warn');

            Logger.logException('unit', loggedException, Logger.Levels.warn);
            expect(console.warn).toHaveBeenCalledTimes(1);
            expect(console.warn).toHaveBeenCalledWith(`unit: ${ loggedException.message }`);
        });
    });
});
