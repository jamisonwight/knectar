var express = require('express');
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
var app = express();



// var ssl_options = {
//   key: fs.readFileSync('./keys/key.pem'),
//   cert: fs.readFileSync('./keys/cert.pem')
// };

app.use(express.static('./public'));
app.use(express.static('./node_modules/bootstrap/dist'));

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());


app.use(session( {secret: 'anything',
                  resave: true,
                  saveUninitialized: true}) );


require('./config/passport')(app);
var db = mongoose.connect('mongodb://localhost/knectar');

// var users = require('./routes/user');
// var auth = require('./routes/auth');
// app.use('/users', users);
// app.use('/auth', auth);

var server = http.createServer(app);
var io = require('socket.io').listen(server);
server.listen(3000);

require('./sockets')(io);
