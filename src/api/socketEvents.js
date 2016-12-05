import {
  CHAT_MOUNTED,
  LEAVE_CHANNEL,
  JOIN_CHANNEL,
  NEW_MESSAGE,
  NEW_CHANNEL,
  TYPING,
  STOP_TYPING,
  NEW_PRIVATE_CHANNEL,
  RECEIVE_SOCKET
} from '../../constants/socketConstants.js'



exports = module.exports = function(io) {
  io.on('connection', function(socket) {
    socket.join('Lobby');

    socket.on(CHAT_MOUNTED, function(user) {
      // TODO: Does the server need to know the user?
      socket.emit(RECEIVE_SOCKET, socket.id)
    })
    socket.on(LEAVE_CHANNEL, function(channel) {
      socket.leave(channel)
    })
    socket.on(JOIN_CHANNEL, function(channel) {
      socket.join(channel.name)
    })
    socket.on(NEW_MESSAGE, function(msg) {
      socket.broadcast.to(msg.channelID).emit('new bc message', msg);
    });
    socket.on(NEW_CHANNEL, function(channel) {
      socket.broadcast.emit('new channel', channel)
    });
    socket.on(TYPING, function (data) {
      socket.broadcast.to(data.channel).emit('typing bc', data.user);
    });
    socket.on(STOP_TYPING, function (data) {
      socket.broadcast.to(data.channel).emit('stop typing bc', data.user);
    });
    socket.on(NEW_PRIVATE_CHANNEL, function(socketID, channel) {
      socket.broadcast.to(socketID).emit('receive private channel', channel);
    })
  });
}
