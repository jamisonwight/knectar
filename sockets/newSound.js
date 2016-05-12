module.exports = function(socket) {
  // socket for message alerts
  socket.on('fart', function(payload){
    var newSound = { sound: payload.sound };
    io.sockets.emit('newSound', newSound);
  });
};
