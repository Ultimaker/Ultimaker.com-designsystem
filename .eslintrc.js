/** @format */

// http://eslint.org/docs/user-guide/configuring

module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2019,
        sourceType: 'module',
    },
    env: {
        amd: true,
        browser: true,
        es6: true,
        jasmine: true,
        node: true,
    },
    plugins: ['@typescript-eslint'],
    extends: [
        'plugin:@typescript-eslint/recommended',
        'eslint-config-airbnb-base',
    ],
    globals: {
        process: true,
        module: true,
        exports: true,
    },
    rules: {
        'arrow-parens': ['off'],
        'class-methods-use-this': 'off',
        'global-require': 'off',
        indent: ['error', 4, { SwitchCase: 1 }],
        'import/newline-after-import': 'off',
        'import/no-extraneous-dependencies': 'off',
        'import/no-unresolved': 'off',
        'import/order': 'off',
        'import/prefer-default-export': 'off',
        'lines-between-class-members': 'off',
        'max-len': 'off',
        'max-line-length': 'off',
        'new-parens': 'off',
        'no-console': ['error', { allow: ['info', 'warn', 'error'] }],
        'no-underscore-dangle': 'off',
        'no-unused-vars': 'off',
        'object-curly-newline': 'off',
        'operator-linebreak': 'off',
        'prefer-default-export': 'off',
    },
};
