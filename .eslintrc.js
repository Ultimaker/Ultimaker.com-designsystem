// http://eslint.org/docs/user-guide/configuring

module.exports = {
    root: true,
    parserOptions: {
        parser: 'babel-eslint',
        ecmaVersion: 2017,
        sourceType: 'module'
    },
    env: {
        amd: true,
        browser: true,
        es6: true,
        jasmine: true,
        node: true
    },
    extends: [
        'eslint:recommended',
        'plugin:vue/essential'
    ],
    // required to lint *.vue files
    plugins: [
        'vue'
    ],
    globals: {
        'process': true,
        'module': true,
        'exports': true
    },
    rules: {
        'no-console': ["error", { allow: ["warn", "info", "error"] }],
        'no-unused-vars': [2, {
            "args": "all",
            "argsIgnorePattern": "^_",
            "vars": "all",
            "varsIgnorePattern": "^_$"
        }],

         // CODE STYLE //
         'array-bracket-spacing': [2, 'never'], // http://eslint.org/docs/rules/array-bracket-spacing
         'block-spacing': [2, 'always'], // http://eslint.org/docs/rules/block-spacing
         'brace-style': [2, '1tbs', {'allowSingleLine': true}], // http://eslint.org/docs/rules/brace-style
         'camelcase': [2, {'properties': 'always'}], // http://eslint.org/docs/rules/camelcase
         'capitalized-comments': 0, // http://eslint.org/docs/rules/capitalized-comments
         'comma-dangle': [2, 'never'], // http://eslint.org/docs/rules/comma-dangle
         'comma-spacing': [1, {'before': false, 'after': true}], // http://eslint.org/docs/rules/comma-spacing
         'comma-style': [2, 'last'], // http://eslint.org/docs/rules/comma-style
         'computed-property-spacing': [2, 'never'], // http://eslint.org/docs/rules/computed-property-spacing
         'consistent-this': [0, '_this'], // http://eslint.org/docs/rules/consistent-this
         'eol-last': 2, // http://eslint.org/docs/rules/eol-last
         'func-call-spacing': 2, // http://eslint.org/docs/rules/func-call-spacing
         'func-name-matching': 2, // http://eslint.org/docs/rules/func-name-matching
         'func-names': [2, 'never'], // http://eslint.org/docs/rules/func-names
         'func-style': 0, // http://eslint.org/docs/rules/func-style
         'id-blacklist': 0, // http://eslint.org/docs/rules/id-blacklist
         'id-length': 0, // http://eslint.org/docs/rules/id-length
         'id-match': 0, // http://eslint.org/docs/rules/id-match
         'indent': ['error', 4, {'SwitchCase': 1}], // http://eslint.org/docs/rules/indent
         'jsx-quotes': [2, 'prefer-double'], // http://eslint.org/docs/rules/jsx-quotes
         'key-spacing': [2, {'afterColon': true}], // http://eslint.org/docs/rules/key-spacing
         'keyword-spacing': 2, // http://eslint.org/docs/rules/keyword-spacing
         'line-comment-position': 0, // http://eslint.org/docs/rules/line-comment-position
         'linebreak-style': 2, // http://eslint.org/docs/rules/linebreak-style
         'lines-around-comment': 0, // http://eslint.org/docs/rules/lines-around-comment
         'lines-around-directive': 2, // http://eslint.org/docs/rules/lines-around-directive
         'max-depth': 2, // http://eslint.org/docs/rules/max-depth
         'max-len': 0, // http://eslint.org/docs/rules/max-len
         'max-lines': 0, // http://eslint.org/docs/rules/max-lines
         'max-nested-callbacks': [2, {'max': 2}], // http://eslint.org/docs/rules/max-nested-callbacks
         'max-params': 0, // http://eslint.org/docs/rules/max-params
         'max-statements-per-line': 0, // http://eslint.org/docs/rules/max-statements-per-line
         'max-statements': 0, // http://eslint.org/docs/rules/max-statements
         'multiline-ternary': 0, // http://eslint.org/docs/rules/multiline-ternary
         'new-cap': [2, {'capIsNew': true}], // http://eslint.org/docs/rules/new-cap
         'new-parens': 2, // http://eslint.org/docs/rules/new-parens
         'newline-after-var': 2, // http://eslint.org/docs/rules/newline-after-var
         'newline-before-return': 2, // http://eslint.org/docs/rules/newline-before-return
         'newline-per-chained-call': [2, {'ignoreChainWithDepth': 2}], // http://eslint.org/docs/rules/newline-per-chained-call
         'no-array-constructor': 2, // http://eslint.org/docs/rules/no-array-constructor
         'no-bitwise': 0, // http://eslint.org/docs/rules/no-bitwise
         'no-continue': 0, // http://eslint.org/docs/rules/no-continue
         'no-inline-comments': 0, // http://eslint.org/docs/rules/no-inline-comments
         'no-lonely-if': 2, // http://eslint.org/docs/rules/no-lonely-if
         'no-mixed-operators': 2, // http://eslint.org/docs/rules/no-mixed-operators
         'no-mixed-spaces-and-tabs': 2, // http://eslint.org/docs/rules/no-mixed-spaces-and-tabs
         'no-multi-assign': 0, // http://eslint.org/docs/rules/no-multi-assign
         'no-multiple-empty-lines': [2, {max: 2, maxEOF: 1}], // http://eslint.org/docs/rules/no-multiple-empty-lines
         'no-negated-condition': 0, // http://eslint.org/docs/rules/no-negated-condition
         'no-nested-ternary': 2, // http://eslint.org/docs/rules/no-nested-ternary
         'no-new-object': 2, // http://eslint.org/docs/rules/no-new-object
         'no-plusplus': 0, // http://eslint.org/docs/rules/no-plusplus
         'no-restricted-syntax': 0, // http://eslint.org/docs/rules/no-restricted-syntax
         'no-tabs': 2, // http://eslint.org/docs/rules/no-tabs
         'no-ternary': 0, // http://eslint.org/docs/rules/no-ternary
         'no-trailing-spaces': 2, // http://eslint.org/docs/rules/no-trailing-spaces
         'no-underscore-dangle': 0, // http://eslint.org/docs/rules/no-underscore-dangle
         'no-unneeded-ternary': 2, // http://eslint.org/docs/rules/no-unneeded-ternary
         'no-whitespace-before-property': 2, // http://eslint.org/docs/rules/no-whitespace-before-property
         'object-curly-newline': 0, // http://eslint.org/docs/rules/object-curly-newline // BUGGED: Also matches deconstructors
         'object-curly-spacing': [2, 'never'], // http://eslint.org/docs/rules/object-curly-spacing
         'object-property-newline': 0, // http://eslint.org/docs/rules/object-property-newline
         'one-var-declaration-per-line': 0, // http://eslint.org/docs/rules/one-var-declaration-per-line
         'one-var': 0, // http://eslint.org/docs/rules/one-var
         'operator-assignment': 0, // http://eslint.org/docs/rules/operator-assignment
         'operator-linebreak': 0, // http://eslint.org/docs/rules/operator-linebreak
         'padded-blocks': [2, 'never'], // http://eslint.org/docs/rules/padded-blocks
         'quote-props': [2, 'consistent'], // http://eslint.org/docs/rules/quote-props
         'quotes': [2, 'single', {'allowTemplateLiterals': true}], // http://eslint.org/docs/rules/quotes
         'require-jsdoc': 0, // http://eslint.org/docs/rules/require-jsdoc
         'semi-spacing': [2, {'before': false, 'after': true}], // http://eslint.org/docs/rules/semi-spacing
         'semi': [2, 'always'], // http://eslint.org/docs/rules/semi
         'sort-keys': 0, // http://eslint.org/docs/rules/sort-keys
         'sort-vars': 0, // http://eslint.org/docs/rules/sort-vars
         'space-before-blocks': [2, 'always'], // http://eslint.org/docs/rules/space-before-blocks
         'space-before-function-paren': [2, 'never'], // http://eslint.org/docs/rules/space-before-function-paren
         'space-in-parens': 0, // http://eslint.org/docs/rules/space-in-parens
         'space-infix-ops': 0, // http://eslint.org/docs/rules/space-infix-ops
         'space-unary-ops': [2, {'words': true, 'nonwords': false}], // http://eslint.org/docs/rules/space-unary-ops
         'spaced-comment': [2, 'always'], // http://eslint.org/docs/rules/spaced-comment
         'template-tag-spacing': [2, 'always'], // http://eslint.org/docs/rules/template-tag-spacing
         'unicode-bom': 2, // http://eslint.org/docs/rules/unicode-bom
         'wrap-regex': 2, // http://eslint.org/docs/rules/wrap-regex
    }
};

