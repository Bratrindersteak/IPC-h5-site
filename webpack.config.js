const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// noinspection JSAnnotator
module.exports = {
    entry: {
        ipc: path.resolve(__dirname + '/src/js/ipc'),
    },
    output: {
        path: path.resolve(__dirname + '/build'),
        filename: 'js/[name]-[hash].js',
    },
    devtool: 'eval-source-map',
    devServer: {
        contentBase: '/public',
        port: 3000,
        inline: true,
        historyApiFallback: true,
        hot: true,
    },
    module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                use: {
                    loader: 'babel-loader',
                },
                exclude: /node_modules/,
            }, {
                test: /\.scss$/,
                use: [
                    {
                        loader: 'style-loader',
                    }, {
                        loader: 'css-loader',
                    }, {
                        loader: 'postcss-loader',
                    }, {
                        loader: 'sass-loader',
                    },
                ],
            }, {
                test: /\.(jpg|png|gif|svg)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 10240,
                        name: '[name].[ext]',
                        outputPath: 'img/ipc/',
                    },
                }],
            }
        ]
    },
    plugins: [
        new webpack.BannerPlugin(`${ new Date() }`),
        new HtmlWebpackPlugin({
            template: __dirname + '/public/ipc.html',
            filename: 'ipc.html',
            chunks: ['ipc'],
            // inject: true,
            inject: 'head',
            title: '小明智能摄像机',
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                removeStyleLinkTypeAttributes: true,
                keepClosingSlash: true,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true,
            },
        }),
        new webpack.HotModuleReplacementPlugin(),
    ],
};