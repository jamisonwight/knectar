module.exports = function(socket) {
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
};
