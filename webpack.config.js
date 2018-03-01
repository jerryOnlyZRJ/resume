const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require("clean-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin')
module.exports = {
    entry: __dirname + "/public/scripts/index.js",
    output: {
        path: __dirname + "/build", //打包后的文件存放的地方
        filename: "[name]-[hash:5].js" //打包后输出文件的文件名,带有md5 hash戳
    },
    devServer: {
        contentBase: "./build", //本地服务器所加载的页面所在的目录
        historyApiFallback: true, //不跳转
        inline: true //实时刷新
    },
    module: {
        rules: [{
            test: /(\.jsx|\.js)$/,
            use: {
                loader: "babel-loader",
            },
            exclude: /node_modules/ //不进行编译的目录
        }, {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: {
                    loader: 'css-loader'
                }
            })
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: __dirname + "/views/index.html" //new 一个这个插件的实例，并传入相关的参数
        }),
        new ExtractTextPlugin("style-[hash:5].css"),
        new CleanWebpackPlugin('build/*', {
            root: __dirname,
            verbose: true,
            dry: false
        }),
        new CopyWebpackPlugin([{
            from: __dirname + '/public/images',
            to: __dirname + '/build/images'
        },{
            from: __dirname + '/public/scripts/vector.js',
            to: __dirname + '/build/vector.js'
        }])
    ]
}