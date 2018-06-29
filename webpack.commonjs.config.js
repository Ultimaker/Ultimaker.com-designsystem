const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const SvgStore = require('webpack-svgstore-plugin');
const nodeExternals = require('webpack-node-externals');
const Visualizer = require('webpack-visualizer-plugin');
const production = process.env.NODE_ENV === 'production';
const base = require('./webpack.config');

function resolve(dir) {
    return path.join(__dirname, dir);
}

const webpackConfig = {
    mode: 'development',
    entry: {
        'components': './src/js/index.js'
    },
    output: {
        path: resolve('dist'),
        publicPath: '/dist',
        library: 'components',
        libraryTarget: 'commonjs',
        filename: `[name].js`,
        chunkFilename: `[name].bundle.js`
    },
    optimization: {
        minimize: false
    },
    externals: [
        'gsap',
        'vue',
        'vuex',
        /^lodash\/.+$/,
        'core-js'
    ],
    module: {
        rules: [
            {
                test: /\.(png|jpg|gif|ttf|otf|eot|woff(2)?)(\?[a-z0-9]+)?$/,
                loader: 'file-loader?name=[path][name].[ext]'
            },
            {
                test: /\.(sass|scss)$/,
                loader: ExtractTextPlugin.extract(['css-loader', 'postcss-loader', 'sass-loader'])
            }
        ]
    },
    plugins: (base.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
            'process.BROWSER': true
        }),
        new ExtractTextPlugin({
            filename: 'components.css',
            allChunks: true
        }),
        new SvgStore({
            svgoOptions: {
                plugins: [
                    {
                        removeTitle: true,
                        removeDimensions: true
                    }
                ]
            },
            prefix: 'icon-'
        }),
        new Visualizer({
            filename: 'statistics.html'
        })
    ])
};

const mergedConfig = merge(base, webpackConfig);

// console.log(require('util').inspect(mergedConfig.module.rules, false, null));
// process.exit(1);
module.exports = mergedConfig;
