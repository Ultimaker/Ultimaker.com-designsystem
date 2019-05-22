/* eslint-disable max-nested-callbacks */
import Viewport from './viewport';

describe('utils', () => {
    describe('viewport', () => {
        const originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;

        beforeEach(() => {
            jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
        });

        afterEach(() => {
            jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
        });

        it('should be a singleton instance', () => {
            const instance = new Viewport();
            const instance2 = new Viewport();

            instance.bla = true;
            expect(instance2.bla).toBeTruthy();
        });

        it('should register and execute an external scroll handler', (done) => {
            const scrollEvent = new window.Event('scroll');
            const viewport = new Viewport();

            viewport.addScrollHandler(() => {
                expect(true).toBeTruthy();
                done();
            });
            document.dispatchEvent(scrollEvent);
        });

        it('should register and execute an external resize handler', (done) => {
            const resizeEvent = new window.Event('resize');
            const viewport = new Viewport();

            viewport.addResizeHandler(() => {
                expect(true).toBeTruthy();
                done();
            });
            window.dispatchEvent(resizeEvent);
        });
    });
});
