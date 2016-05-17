var express = require('express');
var app = express();
var _ = require('underscore');
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

var audience = [];
var users = [];
var title = 'CONNECT ME';
var connections = [];

app.use(express.static('./public'));
app.use(express.static('./node_modules/bootstrap/dist'));

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// app.use(session( {secret: 'anything',
//                   resave: true,
//                   saveUninitialized: true}) );

// require('./config/passport')(app);
// // var db = mongoose.connect('mongodb://localhost/knectar');

// // var users = require('./routes/user');
// // var auth = require('./routes/auth');
// // app.use('/users', users);
// // app.use('/auth', auth);

var server = http.createServer(app);
var io = require('socket.io').listen(server);

server.listen('3000');

// SOCKET IO
io.sockets.on('connection', function (socket) {

//Socket function on user disconnect
socket.once('disconnect', function() {
  var member = _.findWhere(users, { id: this.id });

  if (member) {
    users.splice(users.indexOf(member), 1);
    io.sockets.emit('userAdded', users);
    console.log("Left: %s ");
  }
//  Delete user on disconnect
  connections.splice(connections.indexOf(socket), 1);
  socket.disconnect();
  console.log("Disconnected: %s sockets remaining.", connections.length);
});

// Socket function when a message is added
  socket.on('addMessage', function(payload) {
    var newMessage = {
      id: this.id,
      name: payload.name,
      image: payload.image,
      message: payload.message,
      type: 'audience',
      date: payload.date,
      alert: payload.alert
    }
    console.log("Audience Joined: %s ", payload.name + " message: ", payload.message);
    this.emit('joined', newMessage);
    audience.push(newMessage);
    io.sockets.emit('audience', audience);
  });

  // Socket to Grab username
  socket.on('username', function(payload){
    var newUser = {
      name: payload.name,
      image: payload.image
    };
    users.push(newUser);
    // Emit new user to client App
    io.sockets.emit('userAdded', users);
    console.log(newUser);
  });

  // socket for message alerts
  socket.on('fart', function(payload){
    var newSound = { sound: payload.sound };
    io.sockets.emit('newSound', newSound);
  });

  socket.emit('welcome', {
    title: title,
    audience: audience
  })

  connections.push(socket);
    console.log("Connected: %s sockets connected.", connections.length);
});
