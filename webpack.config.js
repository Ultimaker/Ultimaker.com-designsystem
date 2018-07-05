const path = require('path');
const webpack = require('webpack');

function resolve(dir) {
    return path.join(__dirname, dir);
}

const webpackConfig = {
    entry: './src/js/index.js',
    output: {
        path: path.resolve(__dirname, './static'),
        publicPath: '/static/',
        filename: 'build.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|vue)$/,
                loader: 'eslint-loader',
                enforce: 'pre',
                include: [resolve('src')],
                options: {
                    formatter: require('eslint-friendly-formatter')
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {}
                }
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.html$/,
                use: 'html-loader'
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        modules: [
            resolve('src'),
            resolve('node_modules')
        ],
        alias: {
            '@root': resolve('.'),
            'src': resolve('src'),
            'adapters': resolve('src/js/adapters'),
            'components': resolve('src/js/components'),
            'atoms': resolve('src/js/components/atoms'),
            'molecules': resolve('src/js/components/molecules'),
            'organisms': resolve('src/js/components/organisms'),
            'organisms-page': resolve('src/js/components/organisms-page'),
            'constants': resolve('src/js/constants'),
            'definitions': resolve('src/js/definitions'),
            'mixins': resolve('src/js/mixins'),
            'router': resolve('src/js/router'),
            'services': resolve('src/js/services'),
            'utils': resolve('src/js/utils')
        }
    },
    devServer: {
        historyApiFallback: true,
        noInfo: true
    },
    performance: {
        hints: false
    },
    devtool: '#eval-source-map'
};

module.exports = webpackConfig;
