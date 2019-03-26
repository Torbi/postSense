//var socket = io.connect('http://localhost:8000');

var socket = io();

socket.on('connection', (socket) => {
  console.log("Socket connected");
  socket.emit("hej alla sockets");
});
