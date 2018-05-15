import BrowserCompatibilities from 'utils/browser-capabilities';

class loader {
    static loadPolyfills() {
        const polyfillIntl = new Promise((resolve) => {
            if (BrowserCompatibilities.supportsIntl) {
                resolve(false);
            } else {
                require.ensure([], () => {
                    require('intl');
                    require('intl/locale-data/jsonp/en.js');

                    resolve(true);
                }, 'intl');
            }
        });

        const polyfillObjectFit = new Promise((resolve) => {
            if (BrowserCompatibilities.supportsObjectFit) {
                resolve(false);
            } else {
                require.ensure([], () => {
                    const objectFitImages = require('object-fit-images');

                    objectFitImages();
                    resolve(true);
                }, 'object-fit');
            }
        });

        const pictureElement = new Promise((resolve) => {
            if (BrowserCompatibilities.supportsPictureElement) {
                resolve(false);
            } else {
                require.ensure([], () => {
                    require('picturefill');

                    resolve(true);
                }, 'picturefill');
            }
        });

        return Promise.all([
            polyfillIntl,
            polyfillObjectFit,
            pictureElement
        ]);
    }
}

export default loader;
