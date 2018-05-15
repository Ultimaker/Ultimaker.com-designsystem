/* eslint-disable max-nested-callbacks */
import PolyLoader from './poly-loader';
import BrowserCompatibilities from 'utils/browser-capabilities';

describe('utils', () => {
    describe('poly-loader', () => {
        it('should not load polyfills when browser supports features', (done) => {
            spyOnProperty(BrowserCompatibilities, 'supportsIntl', 'get').and.returnValue(true);
            spyOnProperty(BrowserCompatibilities, 'supportsObjectFit', 'get').and.returnValue(true);
            spyOnProperty(BrowserCompatibilities, 'supportsPictureElement', 'get').and.returnValue(true);

            PolyLoader.loadPolyfills()
                .then((status) => {
                    expect(status.length).toEqual(3);
                    status.forEach(s => expect(s).toEqual(false));
                    done();
                });
        });

        it('should load polyfills when browser supports features', (done) => {
            spyOnProperty(BrowserCompatibilities, 'supportsIntl', 'get').and.returnValue(false);
            spyOnProperty(BrowserCompatibilities, 'supportsObjectFit', 'get').and.returnValue(false);
            spyOnProperty(BrowserCompatibilities, 'supportsPictureElement', 'get').and.returnValue(false);

            PolyLoader.loadPolyfills()
                .then((status) => {
                    expect(status.length).toEqual(3);
                    status.forEach(s => expect(s).toEqual(true));
                    done();
                });
        });
    });
});
