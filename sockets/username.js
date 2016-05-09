module.exports = function() {
  // Socket to Grab username
  socket.on('username', function(payload){
    var newUser = {
      name: payload.users,
      id: this.id
    };
    users.push(newUser);
    io.sockets.emit('userAdded', users);
    console.log(newUser);
  });
};
