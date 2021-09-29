const path = require('path');
const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const webpackConfig = {
    mode: process.env.NODE_ENV,
    entry:'./archive/mainEntry.js',
    output:{
        path: path.resolve(process.cwd(), './archive/sticker-ui/'),
        publicPath: '',
        filename: '[name].[hash:7].js',
        chunkFilename:'[name].js'
    },
    devServer: {
        port: 8085,
        publicPath: '/',
        disableHostCheck:true,
        // hot: true,
        open:true//自动打开浏览器
      },
      module: {
        rules:[
            //vue loader
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                  compilerOptions: {
                    preserveWhitespace: false
                  }
                }
              },
            //样式loader
            {
              test: /\.(scss|css)$/,
              use: [
                'style-loader',
                'css-loader',
                'sass-loader'
              ]
            },
        ]
      },
    resolve: {
        extensions: ['.js', '.vue', '.json']
      },
    plugins:[
        new htmlWebpackPlugin({
            template:'./archive/index.html',
            filename:'index.html',
            // minify:{//html文件压缩
            //     removeAttributeQuotes:true,//去掉双引号
            //     collapseBooleanAttributes:true
            // },
            hash:true//引入文件的时候加hash值，防止缓存
        }),
        new VueLoaderPlugin()
    ]
}
module.exports = webpackConfig;