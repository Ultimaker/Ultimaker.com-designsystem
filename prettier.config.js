/** @format */
module.exports = {
    requirePragma: true,
    singleQuote: true,
    trailingComma: 'es5',
    arrowParens: 'always',
    overrides: [
        {
            files: '*.scss',
            options: {
                singleQuote: false,
            },
        },
    ],
};
