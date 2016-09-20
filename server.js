var options = { // defaults
    http: false,
    ip: "0.0.0.0",
    port: 9001,
    plugin: [],
}

var opt = require("node-getopt").create([
    ['', 'http', 'Disable SSL'],
    ['', 'ip=ARG', 'Set IP'],
    ['', 'port=ARG', 'Set port'],
    ['w', '--watch', 'Recompile assets on file modification'],
    ['d', '--development', 'Runs server with webpack-dev-server if `development\' is passed'],
    // ['', 'env=ARG', 'Runs server with webpack-dev-server if `development\' is passed'],
    // ['', 'plugin=ARG+', 'Add "connect-style" plugin'],
    ['h', 'help', 'IM TOTALLY THE HELP TEXT']
]).bindHelp().parseSystem();

if (opt.argv.length > 0) {  //Args that dont fall within what you defined above.
    console.error("ERROR: Unexpected argument(s): " + opt.argv.join(', '));
    process.exit(1);
}

// Merge opts into options
for (var attrname in opt.options) { options[attrname] = opt.options[attrname]; }

var fs = require('fs'),
    path = require('path');


var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config.js');

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  // inline:
  historyApiFallback:  {
    index: '/dist/'
  }
}).listen(8080, 'localhost', function (err, result) {
  if (err) {
    return console.log(err);
  }

  console.log('Listening at http://localhost:8080/');
});
