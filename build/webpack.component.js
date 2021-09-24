const path = require('path');

const Components = require('../components.json');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

const webpackConfig = {
  mode: 'production',
  entry: Components,
  output: {
    path: path.resolve(process.cwd(), './lib'),
    publicPath: '/dist/',
    filename: '[name].js',
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
};

module.exports = webpackConfig;
