module.exports = function() {
  // Socket function when a message is added
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
};
