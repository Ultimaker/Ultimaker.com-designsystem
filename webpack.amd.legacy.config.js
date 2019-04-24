const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const SvgStore = require('webpack-svgstore-plugin');
const Visualizer = require('webpack-visualizer-plugin');
const production = process.env.NODE_ENV === 'production';
const base = require('./webpack.amd.config');

function resolve(dir) {
    return path.join(__dirname, dir);
}

const webpackConfig = {
    entry: {
        'legacy': './src/js/legacy.ts'
    },
    plugins: [
        new Visualizer({
            filename: 'statistics.legacy.html'
        })
    ]
};

base.entry = {};

const mergedConfig = merge(base, webpackConfig);

const postCssLoader = mergedConfig.module.rules
    .find(rule => rule.test.toString() === '/\\.(sass|scss)$/')
    .use.find(loader => loader.loader === 'postcss-loader');

postCssLoader.options.config.ctx.postcsswrap = {
    selector: '.um-components'
};

// console.log(require('util').inspect(mergedConfig, false, null, true));
// process.exit(1);
module.exports = mergedConfig;
