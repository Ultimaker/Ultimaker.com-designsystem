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
        filename: 'build.js',
    },
    module: {
        rules: [
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
            },
            {
                test: /\.(sass|scss)$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader', options: { sourceMap: true } },
                    { loader: 'sass-loader', options: { sourceMap: true } }
                ]
            }
        ]
    },
    resolve: {
        alias: {
            vue$: 'vue/dist/vue.esm.js',
            src: resolve('src'),
            adapters: resolve('src/js/adapters'),
            components: resolve('src/js/components'),
            constants: resolve('src/js/constants'),
            definitions: resolve('src/js/definitions'),
            mixins: resolve('src/js/mixins'),
            router: resolve('src/js/router'),
            services: resolve('src/js/services'),
            utils: resolve('src/js/utils')
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