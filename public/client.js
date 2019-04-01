//var socket = io.connect('http://localhost:8000');

var socket = io();

socket.on('connection', (socket) => {
  console.log("Socket connected");
  socket.emit("msg", "hej alla sockets");

});

socket.on('alertPost', (res) => {
  console.log(res);
});
