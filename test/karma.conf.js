const webpackConfig = require('../webpack.test.config');

const enableDebug = process.argv.indexOf('--debug') > 0,
    localChrome = process.argv.indexOf('--chrome') > 0;

const getBrowsers = () => {
    if (enableDebug) {
        return [];
    }

    if (localChrome) {
        return ['ChromeHeadless'];
    }

    if (!process.env.CHROMIUM_BIN) {
        process.env.CHROMIUM_BIN = require('puppeteer').executablePath();
    }

    return ['ChromiumHeadlessNoSandbox'];
};

module.exports = function(config) {
    config.set({
        browsers: getBrowsers(),
        logLevel: config.LOG_INFO,
        browserConsoleLogOptions: {level: 'error', format: '%b %T: %m', terminal: true},
        customLaunchers: {
            ChromiumHeadlessNoSandbox: {
                base: 'ChromiumHeadless',
                flags: ['--no-sandbox']
            }
        },
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
                    statements: 65,
                    branches: 50,
                    functions: 65,
                    lines: 65
                }
            },
            watermarks: {
                statements: [65, 80],
                functions: [65, 80],
                branches: [50, 75],
                lines: [65, 80]
            }
        }
    });
};
