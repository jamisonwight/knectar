module.exports = function() {
  // socket for message alerts
  socket.on('fart', function(payload){
    var newSound = { sound: payload.sound };
    io.sockets.emit('newSound', newSound);
  });
};
