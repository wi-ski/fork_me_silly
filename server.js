var express = require("express");
var serveStatic = require("serve-static");
var http = require('http');
const SocketIO = require('socket.io')

var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
const app  = express();
const PORT = process.env.PORT || 8080;

var fs = require('fs');
var path = require('path');

var webpack = require('webpack');
var config = require('./webpack.config.js');
// var config = require('./webpack.dev.config.js');

var compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
    stats: {colors: true}
}))

app.use(webpackHotMiddleware(compiler))

app.use(serveStatic(__dirname+"/dist"));
app.use(serveStatic("/"));


var server = app.listen(8080);


const io = new SocketIO(server,{path:"/api/chat"});

io.on('connection', (socket) => {
    console.log("|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*")
    console.log("|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*")
    console.log("|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*")
    console.log("OMG SOMONE CONNECTIONEDD")
    console.log("|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*")
    console.log("|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*")
    console.log("|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*")
});