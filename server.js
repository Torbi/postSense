const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const DatabaseHandler = require('./dbconn.js');

const PORT = process.env.PORT || 8080;

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
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('thanks');
  dbconn.newPost();
})

io.on('connection', (socket) => {
  console.log("User connected");
  socket.emit('alertPost', dbConn.getPost());
  socket.on('disconnect', () => {
    console.log("User disconnected");
  })

  socket.on('msg', (txt) => {
      console.log(txt);
  })

  socket.on('newPost', (txt) =>  {
    console.log("newpost");
    console.log(txt);
    dbConn.newPost();
  })
})


server.listen(PORT, () => console.log(`Listening on port ${PORT}`));
