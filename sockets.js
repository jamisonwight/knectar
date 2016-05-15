var _ = require('underscore');
var audience = [];
var users = [];
var title = 'CONNECT ME';
var connections = [];

module.exports = function(io) {
  // SOCKET IO
  io.sockets.on('connect', function (socket) {

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
}
