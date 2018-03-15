const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
module.exports = {
    entry: __dirname + '/public/scripts/index.js',
    output: {
        path: __dirname + '/build/static', // 打包后的文件存放的地方
        filename: 'scripts/[name]-[hash:5].js' // 打包后输出文件的文件名,带有md5 hash戳
    },
    devServer: {
        contentBase: './build', // 本地服务器所加载的页面所在的目录
        historyApiFallback: true, // 不跳转
        inline: true // 实时刷新
    },
    resolve: {
        extensions: ['.jsx', '.js']
    },
    module: {
        rules: [{
            test: /(\.jsx|\.js)$/,
            use: {
                loader: 'babel-loader'
            },
            exclude: /node_modules/ // 不进行编译的目录
        }, {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: {
                    loader: 'css-loader'
                }
            })
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: __dirname + '/views/index.html', // new 一个这个插件的实例，并传入相关的参数
            filename: '../index.html'
        }),
        new ExtractTextPlugin('styles/style-[hash:5].css'),
        new CleanWebpackPlugin('build/*', {
            root: __dirname,
            verbose: true,
            dry: false
        }),
        new CopyWebpackPlugin([{
            from: __dirname + '/public/images',
            to: __dirname + '/build/static/images'
        }, {
            from: __dirname + '/public/scripts/vector.js',
            to: __dirname + '/build/static/scripts/vector.js'
        }]),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'scripts/common/vendor-[hash:5].js'
        })
    ]
}