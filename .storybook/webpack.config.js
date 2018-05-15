const path = require('path');
const webpack = require('webpack');

module.exports = (storybookBaseConfig, configType, defaultConfig) => {
    defaultConfig.module.rules.push({
        test: [/\.stories\.js$/, /index\.js$/],
        loaders: [require.resolve('@storybook/addon-storysource/loader')],
        include: [path.resolve(__dirname, '../src/js')],
        enforce: 'pre',
    });

    defaultConfig.module.rules = defaultConfig.module.rules.concat([
        {
            test: /\.(png|jpg|gif|ttf|otf|eot|woff(2)?)(\?[a-z0-9]+)?$/,
            loader: 'file-loader?name=[path][name].[ext]'
        },
        {
            test: /\.(sass|scss)$/,
            use: [
                { loader: "style-loader" }, 
                { loader: "css-loader", options: { sourceMap: true } }, 
                { loader: "sass-loader", options: { sourceMap: true } }
            ]
        }
    ]);

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

    return defaultConfig;
};
