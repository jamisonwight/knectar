module.exports = function() {
  //Socket function on user disconnect
  socket.once('disconnect', function() {
    var member = _.findWhere(users, { id: this.id });

    if (member) {
      users.splice(users.indexOf(member), 1);
      io.sockets.emit('userAdded', users);
      console.log("Left: %s ");
    }
    // Delete user on disconnect
    connections.splice(connections.indexOf(socket), 1);
    socket.disconnect();
    console.log("Disconnected: %s sockets remaining.", connections.length);
  });
};
