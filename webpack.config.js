module.exports = {
	entry: "./app-client.js",
	output: {
		filename: "public/bundle.js"
	},
	module: {
		loaders: [
			{
				exclude: /(node_modules|app-server.js)/,
				loader: 'babel'
			},
				{ test: /\.css$/, loader: "style-loader!css-loader" },
      			{ test: /\.png$/, loader: "url-loader?limit=100000" },
      			{ test: /\.jpg$/, loader: "file-loader" },
		]
	}
};
