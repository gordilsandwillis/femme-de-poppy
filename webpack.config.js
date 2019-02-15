
const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const WebpackBuildNotifierPlugin = require('webpack-build-notifier');

const data = require('./data')

const path = require('path');

const config = {

	mode : 'development',

	entry: './src/js/app.js',

	output: {
		filename: 'app.js',
		path: __dirname + '/build',
		libraryTarget: 'umd',
		globalObject : 'this'
	},

	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: ['babel-loader']
			},

			// css
			{
				test: /\.css$/,
				include: /node_modules/,
				use: ExtractTextPlugin.extract(
					{
						fallback: 'style-loader',
						use: ['css-loader']
				})
			},

			// sass
			{
				test: /\.scss$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: [
						{
							loader: 'css-loader',
							options: {
								sourceMap: true,
							},
						},
						{
							loader: 'postcss-loader',
							options: {
								sourceMap: true
							}
						},
						{
							loader : 'resolve-url-loader'
						},
						{
							loader: 'sass-loader',
							options: {
								sourceMap: true,
							},
						}
					]
				})
			},
			{
        test: /\.(otf|eot|ttf|woff|woff2)$/,
        loader: 'file-loader?name=fonts/[name].[ext]'
      },
      {
        test: /\.(png|jpg|gif|ico)$/,
        loader: 'file-loader?name=images/[name].[ext]'
      }

		]
	},

	plugins: [
	 	new StaticSiteGeneratorPlugin({
				//crawl: true,
				paths: data.paths,
				locals: data.locals,
				// globals: {
				//	window: {}
				//}
			}),
	  new WebpackBuildNotifierPlugin({
	    title: "Webpack Build",
	    logo: path.resolve("./img/favicon.png"),
	    suppressSuccess: false,
	    sound: false
	  }),

	 new ExtractTextPlugin('[name].css')
	],

	resolve : {
		modules: [
			path.resolve(__dirname, './src'),
			path.resolve(__dirname, './src/js'),
			path.resolve(__dirname, './node_modules')
		],
		extensions: ['.js', '.json', '.hbs', '.jpg', '.png', '.mp4', '.svg', '.sass', '.scss', '.css', '.pdf']
	},
}

module.exports = config;

//		Issue with StaticSiteGeneratorPlugin and HMR
//    globalObject: 'this'
//    https://github.com/markdalgleish/static-site-generator-webpack-plugin/issues/130
//    globalObject: `typeof self !== 'undefined' ? self : this`

