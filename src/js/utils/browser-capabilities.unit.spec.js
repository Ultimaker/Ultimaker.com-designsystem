/* eslint-disable max-nested-callbacks */
import BrowserCapabilities from './browser-capabilities';

describe('utils', () => {
    describe('browser-capabilities', () => {
        it('should be a singleton instance', () => {
            const instance = new BrowserCapabilities(),
                instance2 = new BrowserCapabilities();

            instance.bla = true;
            expect(instance2.bla).toBeTruthy();
        });

        it('should test if the browser has touch support', () => {
            const documentElementWithTouchStart = jasmine.createSpyObj('documentElement', ['ontouchstart']);

            spyOnProperty(document, 'documentElement', 'get').and.returnValue(documentElementWithTouchStart);
            expect(BrowserCapabilities.supportsTouch).toBeTruthy();
        });

        it('should test if the browser hasn\'t touch support', () => {
            const documentElementWithoutTouchStart = jasmine.createSpy('documentElement');

            spyOnProperty(document, 'documentElement', 'get').and.returnValue(documentElementWithoutTouchStart);
            expect(BrowserCapabilities.supportsTouch).toBeFalsy();
        });
    });
});
