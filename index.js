var webpack = require('webpack');
var fs = require('fs');
var path = require('path');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config.js');

const PORT = process.env.PORT || 4000;
const INTERFACE = process.env.INTERFACE || 'localhost';

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true
}).listen(PORT, INTERFACE, function (err, result) {
  if (err) {
    console.log(err);
  } else {
		console.log('Listening at ' + INTERFACE + ':' + PORT);
  }
});
