const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

function resolve(dir) {
    return path.join(__dirname, dir);
}

module.exports = {
    entry: './src/js/index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: '/dist/',
        filename: 'build.js'
    },
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
                test: /\.(ttf|otf|eot|woff(2)?)(\?[a-z0-9]+)?$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]?[hash]'
                }
            },
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
    module.exports.devtool = '#source-map';
    // http://vue-loader.vuejs.org/en/workflow/production.html
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({
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
