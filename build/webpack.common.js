const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');//此插件用于打包时解析vue文件
module.exports = {
    mode: 'production',
    entry:{
        app:['./src/index.js']
    },
    output:{
        path: path.resolve(process.cwd(), './lib'),//process.cwd()返回当前路径
        publicPath: '/dist/',
        filename: 'element-ui.common.js',
        libraryExport: 'default',
        library: 'ELEMENT',
        libraryTarget: 'commonjs2'
    },
    module:{
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',//所有vue文件解析
                options: {
                  compilerOptions: {
                    preserveWhitespace: false
                  }
                }
            }
            ]
        },
    plugins: [
        new VueLoaderPlugin()
      ]
}