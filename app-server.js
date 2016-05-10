var express = require('express');
var app = express();
var _ = require('underscore');
var fs = require('fs');
var http = require('http');
var https = require('https');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var passport = require('passport');
var session = require('express-session');
var mongoose = require('mongoose');

var connections = [];
var title = 'CONNECT ME';
var audience = [];
var users = [];

// var ssl_options = {
//   key: fs.readFileSync('./keys/key.pem'),
//   cert: fs.readFileSync('./keys/cert.pem')
// };
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static('./public'));
app.use(express.static('./node_modules/bootstrap/dist'));

app.use(session( {secret: 'anything',
                  resave: true,
                  saveUninitialized: true}) );

require('./config/passport')(app);


var port = process.env.PORT || 5000;
var server = http.createServer(app);
var io = require('socket.io').listen(server);

server.listen(port);

// SOCKET IO
io.sockets.on('connection', function (socket) {
  // On disconnect
  require('./sockets/disconnect')();
  // On new message
  require('./sockets/addMessage')();
  // On user login
  require('./sockets/username')();
  // on notification
  require('./sockets/newSound')();

	connections.push(socket);
    console.log("Connected: %s sockets connected.", connections.length);

	socket.emit('welcome', {
		title: title,
		audience: audience
	})
});

console.log("Polling server is running at http://localhost:" + port);
