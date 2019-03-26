const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

server = app.listen(8000);
const io = require('socket.io')(server);
console.log("Server started");

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.post('/insertPost', function(req, res) {
  console.log("req body: " + req.body);
  if(req.method() == 'POST'){
    console.log("halleluja de post");
    insertPost(req.body);
  }
});

app.get('/', (req, res) => {
  res.send("hello mr world");
});
io.on('connection', onConnection);

function onConnection(socket) {
  console.log("Socket connected");
  //console.log(io.sockets.sockets);
}

function post(msg){
  socket.emit("post", msg);
}
