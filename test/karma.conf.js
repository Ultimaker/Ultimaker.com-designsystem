const fs = require('fs');
const webpackConfig = require('../webpack.test.config');

const enableDebug = process.argv.indexOf('--debug') > 0,
    localChrome = process.argv.indexOf('--chrome') > 0;

const getBrowsers = () => {
    if (enableDebug) {
        return [];
    }
    process.env.CHROME_BIN = require('puppeteer').executablePath();

    return ['ChromeHeadless'];
};

module.exports = function(config) {
    config.set({
        browsers: getBrowsers(),
        browserNoActivityTimeout: 30000,
        frameworks: ['jasmine-ajax', 'jasmine'],
        reporters: ['spec', 'coverage'],
        specReporter: {
            suppressSkipped: true
        },
        files: [
            {pattern: '../src/js/**/*.spec.+(js|ts)'}
        ],
        preprocessors: {
            '../src/js/**/*.+(js|ts)': ['webpack', 'sourcemap']
        },
        mime: {
            'text/x-typescript': ['ts', 'tsx']
        },
        webpack: webpackConfig,
        webpackMiddleware: {
            noInfo: true
        },
        coverageReporter: {
            dir: './coverage',
            reporters: [
                {
                    type: 'lcov',
                    subdir: '.'
                },
                {
                    type: 'text-summary'
                }
            ],
            check: {
                global: {
                    statements: 70,
                    branches: 50,
                    functions: 70,
                    lines: 70
                }
            },
            watermarks: {
                statements: [70, 80],
                functions: [70, 80],
                branches: [50, 75],
                lines: [70, 80]
            }
        }
    });
};
