var HtmlwebpackPlugin = require('html-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
	entry:'./main.js',
	output:'bundle.js',
	plugins:[
      new HtmlwebpackPlugin({
      	title:'webpackfdsfdsafdsa',
      	filename:'index.html'
      }),
      new OpenBrowserPlugin({
      	url: 'http://localhost:8090'
      })
	]
}