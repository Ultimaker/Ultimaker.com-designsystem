const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

function resolve(dir) {
    return path.join(__dirname, dir);
}

const webpackConfig = {
    module: {
        rules: [
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
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]?[hash]'
                }
            },
            {
                test: /\.(png|jpg|gif|ttf|otf|eot|woff(2)?)(\?[a-z0-9]+)?$/,
                loader: 'file-loader?name=[path][name].[ext]'
            },
            // {
            //     test: /\.(ttf|otf|eot|woff(2)?)(\?[a-z0-9]+)?$/,
            //     loader: 'file-loader',
            //     options: {
            //         name: '[name].[ext]?[hash]'
            //     }
            // },
            {
                test: /\.(sass|scss)$/,
                use: [
                    { loader: "style-loader" }, 
                    { loader: "css-loader", options: { sourceMap: true } }, 
                    { loader: "sass-loader", options: { sourceMap: true } }
                ]
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
        ]
    },
    resolve: {
        alias: {
            vue$: 'vue/dist/vue.esm.js',
            src: resolve('src'),
            adapters: resolve('src/js/adapters'),
            components: resolve('src/js/components'),
            constants: resolve('src/js/constants'),
            definitions: resolve('src/js/definitions'),
            mixins: resolve('src/js/mixins'),
            router: resolve('src/js/router'),
            services: resolve('src/js/services'),
            utils: resolve('src/js/utils')
        }
    },
    devServer: {
        historyApiFallback: true,
        noInfo: true
    },
    performance: {
        hints: false
    },
    devtool: '#eval-source-map'
};

if (process.env.NODE_ENV === 'production') {
    webpackConfig.devtool = '#source-map';
    // http://vue-loader.vuejs.org/en/workflow/production.html
    webpackConfig.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.BROWSER': true,
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            compress: {
                warnings: false
            }
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        }),
        new ExtractTextPlugin({
            filename: '[name].css',
            allChunks: true
        }),
    ]);
}
 
module.exports = webpackConfig;