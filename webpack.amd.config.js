const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');
const SvgStore = require('webpack-svgstore-plugin');
const Visualizer = require('webpack-visualizer-plugin');
const production = process.env.NODE_ENV === 'production';
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const base = require('./webpack.config');

function resolve(dir) {
    return path.join(__dirname, dir);
}

const webpackConfig = {
    mode: production ? 'production' : 'development',
    devtool: '#nosources-source-map',
    entry: {
        'components': './src/js/index.ts'
    },
    output: {
        path: resolve('dist'),
        publicPath: '/dist/',
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
        /^gsap\/.+$/,
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

// IMPORTANT: We need to remove CSS from JS bundle on dev builds too, otherwise the style-loader
// will push the CSS to the DOM through the window object (SRR has no such object)!
if (!production) {
    const sassLoader = base.module.rules.find(p => p.use && p.use.length && p.use[0].loader === 'style-loader');

    if (sassLoader) {
        sassLoader.use[0].loader = MiniCssExtractPlugin.loader;
    }
    webpackConfig.plugins.push(
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css'
        })
    );
}

const mergedConfig = merge(base, webpackConfig);

// console.log(require('util').inspect(mergedConfig, false, null, true));
// process.exit(1);
module.exports = mergedConfig;
