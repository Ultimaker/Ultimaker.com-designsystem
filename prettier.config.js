/** @format */
module.exports = {
    requirePragma: true,
    singleQuote: true,
    trailingComma: 'es5',
    overrides: [
        {
            files: '*.scss',
            options: {
                singleQuote: false,
            },
        },
    ],
};
