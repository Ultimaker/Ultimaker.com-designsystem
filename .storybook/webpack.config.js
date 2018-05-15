const path = require('path');
const webpack = require('webpack');
const merge = require("webpack-merge");
const projectConfig = require('../webpack.config');


module.exports = (storybookBaseConfig, configType, defaultConfig) => {
    defaultConfig.module.rules.push({
        test: [/\.stories\.js$/, /index\.js$/],
        loaders: [require.resolve('@storybook/addon-storysource/loader')],
        include: [path.resolve(__dirname, '../src/js')],
        enforce: 'pre',
    });

    defaultConfig.plugins.push(
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            chunks: ['preview'],
            minChunks(module) {
                // this assumes your vendor imports exist in the node_modules directory
                return module.context && module.context.indexOf('node_modules') !== -1;
            },
        })
    );

    const config = merge(defaultConfig, projectConfig);

    console.log(require('util').inspect(config, false, null, true));

    return config;
};
