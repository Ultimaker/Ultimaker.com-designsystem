/*eslint-disable */

module.exports = {
    verbose: true,
    bail: true,
    transform: {
        '^.+\\.html?$': 'html-loader-jest',
        '^.+\\.md?$': 'markdown-loader-jest',
        '^.+\\.ts$': "ts-jest",
        '^.+\\.js?$': '<rootDir>/node_modules/jest-vue-preprocessor',
        '^.+\\.js?$': 'babel-jest'
    },
    transformIgnorePatterns: [
        '/node_modules/(?!(@storybook/.*\\.vue$))'
    ],
    testMatch: [
        '**/test/?(*.)+(snapshots.spec).(ts|js)?(x)'
    ],
    moduleFileExtensions: ['vue', 'ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    moduleDirectories: [
        'src',
        'node_modules'
    ],
    moduleNameMapper: {
        '^src/scss/storybook.scss$': '<rootDir>/test/mock/jest.styleMock.js',
        '\\.(css|less|sass|scss)$': '<rootDir>/test/mock/jest.styleMock.js',
        '^@root$': '<rootDir>',
        '^src/(.*)$': '<rootDir>/src/$1',
        '^adapters/(.*)$': '<rootDir>/src/js/adapters/$1',
        '^components/(.*)$': '<rootDir>/src/js/components/$1',
        '^atoms/(.*)$': '<rootDir>/src/js/components/atoms/$1',
        '^molecules/(.*)$': '<rootDir>/src/js/components/molecules/$1',
        '^organisms/(.*)$': '<rootDir>/src/js/components/organisms/$1',
        '^organisms-page/(.*)$': '<rootDir>/src/js/components/organisms-page/$1',
        '^constants/(.*)$': '<rootDir>/src/js/constants/$1',
        '^definitions/(.*)$': '<rootDir>/src/js/definitions/$1',
        '^mixins/(.*)$': '<rootDir>/src/js/mixins/$1',
        '^router/(.*)$': '<rootDir>/src/js/router/$1',
        '^services/(.*)$': '<rootDir>/src/js/services/$1',
        '^utils/(.*)$': '<rootDir>/src/js/utils/$1',
        '^plugins/(.*)$': '<rootDir>/src/js/plugins/$1'
    }
};
