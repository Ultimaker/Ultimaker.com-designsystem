const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const production = process.env.NODE_ENV === 'production';


function resolve(dir) {
    return path.join(__dirname, dir);
}

const webpackConfig = {
    entry: './src/js/index.js',
    devtool: '#eval-source-map',
    devServer: {
        historyApiFallback: true,
        noInfo: true
    },
    output: {
        path: path.resolve(__dirname, './static'),
        publicPath: '/static/',
        filename: 'build.js'
    },
    performance: {
        hints: false
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
            },
            {
                test: /\.(sass|scss)$/,
                use: [
                    production ? MiniCssExtractPlugin.loader : 'style-loader',
                    'css-loader', 'postcss-loader', 'sass-loader'
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'components.css',
            chunkFilename: "[id].css"
        })
    ]
};

module.exports = webpackConfig;
