const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');
const SvgStore = require('webpack-svgstore-plugin');
const Visualizer = require('webpack-visualizer-plugin');
const production = process.env.NODE_ENV === 'production';
const base = require('./webpack.config');

function resolve(dir) {
    return path.join(__dirname, dir);
}

const webpackConfig = {
    mode: 'production',
    devtool: '#nosources-source-map',
    entry: {
        'components': './src/js/index.ts'
    },
    output: {
        path: resolve('dist'),
        publicPath: '/dist',
        library: 'components',
        libraryTarget: 'amd',
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
        'lodash',
        /^lodash\/.+$/,
        'core-js',
        /^core-js\/.+$/,
        'vue-property-decorator',
        'vue-class-component',
        'vue-template-compiler',
        'vue-loader',
        'vue-router'
    ],
    module: {
        rules: [
            {
                test: /\.(png|jpg|gif|ttf|otf|eot|woff(2)?)(\?[a-z0-9]+)?$/,
                loader: 'file-loader?name=[path][name].[ext]'
            }
        ]
    },
    plugins: (base.plugins || []).concat([
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

// console.log(require('util').inspect(mergedConfig, false, null, true));
// process.exit(1);
module.exports = mergedConfig;
