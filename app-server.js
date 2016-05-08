var express = require('express');
var app = express();
var _ = require('underscore');
var fs = require('fs');
var http = require('http');
var https = require('https');

var connections = [];
var title = 'CONNECT ME';
var audience = [];
var users = [];

var ssl_options = {
  key: fs.readFileSync('./keys/key.pem'),
  cert: fs.readFileSync('./keys/cert.pem')
};

app.use(express.static('./public'));
app.use(express.static('./node_modules/bootstrap/dist'));


var port = process.env.PORT || 5000;
var server = http.createServer(app);
var io = require('socket.io').listen(server);

server.listen(port);

io.sockets.on('connection', function (socket) {

	socket.once('disconnect', function() {
		var member = _.findWhere(users, { id: this.id });

		if (member) {
			users.splice(users.indexOf(member), 1);
			io.sockets.emit('userAdded', users);
			console.log("Left: %s ");
		}

		connections.splice(connections.indexOf(socket), 1);
		socket.disconnect();
		console.log("Disconnected: %s sockets remaining.", connections.length);
	});

	socket.on('addMessage', function(payload) {
		var newMessage = {
			id: this.id,
			name: payload.name,
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

	socket.on('username', function(payload){
		var newUser = {
			name: payload.users,
			id: this.id
		};
		users.push(newUser);
		io.sockets.emit('userAdded', users);
		console.log(newUser);
	});

	socket.on('fart', function(payload){
		var newSound = { sound: payload.sound };
		io.sockets.emit('newSound', newSound);
	});

	connections.push(socket);
    console.log("Connected: %s sockets connected.", connections.length);
	socket.emit('welcome', {
		title: title,
		audience: audience
	})
});

console.log("Polling server is running at http://localhost:" + port);
