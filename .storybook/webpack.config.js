// this webpack config is for storybook, not the exported component library
// @link https://storybook.js.org/docs/configurations/custom-webpack-config/#full-control-mode
const path = require('path');
const webpack = require('webpack');
const merge = require("webpack-merge");
const projectConfig = require('../webpack.config');
const SvgStore = require('webpack-svgstore-plugin');

// Export a function. Accept the base config as the only param.
module.exports = async ({ config, mode }) => {
    config = merge(projectConfig, config);

    // `mode` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Make whatever fine-grained changes you need
    config.plugins.push(
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        })
    );

    config.plugins.push(
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
        })
    );

    config.module.rules.push({
        test: /\.ts?$/,
        include: [
            path.join(__dirname, 'store'),
        ],
        use: [
            {
                loader: 'babel-loader',
            },
            {
                loader: 'ts-loader',
                options: {
                    appendTsSuffixTo: [/\.vue$/],
                },
            },
        ],
    });

    // Return the altered config
    return config;
};
