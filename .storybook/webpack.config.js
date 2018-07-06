const path = require('path');
const webpack = require('webpack');
const merge = require("webpack-merge");
const projectConfig = require('../webpack.config');
const SvgStore = require('webpack-svgstore-plugin');

module.exports = (storybookBaseConfig, configType, defaultConfig) => {
    // defaultConfig.module.rules.push({
    //     test: [/\.stories\.js$/],
    //     loaders: [require.resolve('@storybook/addon-storysource/loader')],
    //     include: [path.resolve(__dirname, '../src/js')],
    //     enforce: 'pre',
    // });

    defaultConfig.module.rules.push({
        test: /\.(sass|scss)$/,
        use: [
            {loader: 'style-loader'},
            {loader: 'css-loader', options: {sourceMap: true}},
            {loader: 'sass-loader', options: {sourceMap: true}}
        ]
    })

    defaultConfig.plugins.push(
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        })
    );

    defaultConfig.plugins.push(
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

    const config = merge(projectConfig, defaultConfig);

    // console.log(require('util').inspect(config, false, null, true));
    // process.exit();
    return config;
};
