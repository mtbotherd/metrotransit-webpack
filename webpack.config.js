// Imports dependancies
const path = require('path');
require ('@babel/register');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

// Webpack configuration
const config = {

	// Mode
	//mode: 'production',

	// Entry
	entry: {
		app: './src/index.js'
	},

	// Loaders
	module: {
		rules: [

			// JS files
			{
				test: /\.js$/,
				exclude: '/node_modules',
				use: {
					loader: 'babel-loader'
				}

			},

			// CSS files
			{
				test: /\.scss$/,
				exclude: '/node_modules',
				use: [
					{
						loader: 'style-loader'
					},
					{
						loader: 'css-loader'
					},
					{
						loader: 'sass-loader'
					}
				]
			}
		]
	},

	// Plugins
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			title: 'Metro Transit with Webpack',
			filename: 'index.html',
			meta: {
				viewport: 'width=device-width, initial-scale=1'
			},
			publicPath: '/dist',
			hash: true // Useful for cache busting
		})
	],

	// Reload on file change
	watch: true,
	watchOptions: {
		ignored: '/node_modules'
	},
	devtool: 'inline-source-map',
	devServer: {
		contentBase: './dist',
		hot: true
	},

	// Output
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	}
}

// Exports
module.exports = config;
