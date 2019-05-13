const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const production = process.env.NODE_ENV === 'production';
const VueLoaderPlugin = require('vue-loader/lib/plugin');

function resolve(dir) {
    return path.join(__dirname, dir);
}

const webpackConfig = {
    entry: './src/js/index.ts',
    devtool: '#eval-source-map',
    devServer: {
        historyApiFallback: true,
        noInfo: true
    },
    node: {
        fs: 'empty'
    },
    output: {
        path: path.resolve(__dirname, './static'),
        publicPath: '/static/',
        filename: 'build.js'
    },
    performance: {
        hints: false
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.vue', '.json', '.vue.html'],
        modules: [
            resolve('src'),
            resolve('node_modules')
        ],
        alias: {
            '@root': resolve('.'),
            'adapters': resolve('src/js/adapters'),
            'atoms': resolve('src/js/components/atoms'),
            'components': resolve('src/js/components'),
            'constants': resolve('src/js/constants'),
            'definitions': resolve('src/js/definitions'),
            'events': resolve('src/js/events'),
            'mixins': resolve('src/js/mixins'),
            'molecules': resolve('src/js/components/molecules'),
            'organisms': resolve('src/js/components/organisms'),
            'organisms-page': resolve('src/js/components/organisms-page'),
            'plugins': resolve('src/js/plugins'),
            'router': resolve('src/js/router'),
            'services': resolve('src/js/services'),
            'scss': resolve('src/scss'),
            'src': resolve('src'),
            'utils': resolve('src/js/utils'),
            'vue': 'vue/dist/vue.js'
        }
    },
    module: {
        rules: [
            {
                test: /\.(js|vue)$/,
                loader: 'eslint-loader',
                enforce: 'pre',
                include: [resolve('src')],
                options: {
                    formatter: require('eslint-friendly-formatter')
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.vue\.html$/,
                loader: 'vue-template-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: [
                    resolve('src'),
                    resolve('node_modules/@ultimaker')
                ]
            },
            {
                test: /\.tsx?$/,
                include: [
                    resolve('src'),
                    resolve('node_modules/@ultimaker')
                ],
                use: [
                    {
                        loader: 'babel-loader'
                    },
                    {
                        loader: 'ts-loader',
                        options: {
                            appendTsSuffixTo: [/\.vue$/]
                        }
                    }
                ]
            },
            {
                test: /\.html$/,
                use: 'html-loader',
                exclude: [/\.vue\.html$/]
            },
            {
                test: /\.(sass|scss)$/,
                use: [
                    {
                        loader: production ? MiniCssExtractPlugin.loader : 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            config: {
                                ctx: {},
                                path: 'postcss.config.js'
                            }
                        }
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
            }
        ]
    },
    plugins: [
     //   new VueLoaderPlugin()
    ]
};

if (production) {
    webpackConfig.plugins.push(
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css'
        })
    );
}

module.exports = webpackConfig;
