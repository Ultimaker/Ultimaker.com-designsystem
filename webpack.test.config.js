const webpack = require('webpack');
const base = require('./webpack.config');

const webpackConfig = Object.assign({}, base, {
    mode: 'development',
    devtool: '#inline-source-map',
    plugins: (base.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production')
        }),
        new webpack.NoEmitOnErrorsPlugin()
    ])
});

// no need for app entry during tests
delete webpackConfig.entry;

module.exports = webpackConfig;
