var ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require('path') ;

var CSS_PATH = path.resolve('./src/styles/css');
var SCRIPTS_PATH = path.resolve('./src/scripts');

module.exports = {
  entry: {
    "commonStyle":"./src/styles/commonStyle.js",
    "main":"./src/scripts/main.js"
  },
  output: {
    path: __dirname+"/dist",
    publicPath: 'dist/',
    filename: '[name].js'
  },
  module: {
    loaders: [
      {test: /\.vue$/,loader: 'vue'},
      {test: /\.js$/,loader: 'babel',exclude: /node_modules/},
      {test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader") },
      {test: /\.(jpg|png|gif)$/, loader: "url?limit=8192&name=images/[name].[hash:8].[ext]"},
      {test: /\.(eot|woff|ttf|svg)$/, loader: "file-loader?name=file/[name].[hash:8].[ext]" }
    ]
  },
  resolve: {
        alias: {
            css_path:CSS_PATH,
            scripts_path:SCRIPTS_PATH
        }
  },
  babel: {
    presets: ['es2015'],
    plugins: ['transform-runtime']
  },
   plugins: [
        new ExtractTextPlugin("[name].css")
   ]
} ;
