var webpack = require('webpack');

module.exports = {
	entry: "./app-client.js",
	output: {
		filename: "public/bundle.js"
	},
	module: {
		loaders: [
			{
			test: /\.jsx?$/,
			exclude: /(node_modules|bower_components)/,
			loader: 'babel', // 'babel-loader' is also a legal name to reference
			query: {
				presets: ['es2015']
			}
			}
		]
	}
};
