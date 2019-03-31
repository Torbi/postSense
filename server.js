const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const DatabaseHandler = require('./dbconn.js');

const PORT = process.env.PORT || 8000;

app.use(bodyParser.urlencoded({ extended: false }));

var dbconn = new DatabaseHandler();

console.log("Server started");

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.post('/', (req, res) => {
  if(req.method == "POST")  {
    console.log("post från arduino");
  }
  console.log('POST /');
  console.dir(req.body);
  res.writeHead(200, {'Content-Type': 'text/html'})
  res.end('thanks')
  dbconn.newPost();
})

io.on('connection', socket => {
  console.log("User connected");
  //dbconn.newPost();
  socket.on('disconnect', () => {
    console.log("User disconnected");
  })

  socket.on('newPost', () =>  {
    console.log("du har fått post");
    //dbConn.newPost();
    //dbConn.getPost();
  })
})


server.listen(PORT, () => console.log(`Listening on port ${PORT}`));
/*
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
}*/
