var mysql = require('mysql');

var conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "postsense"
});

conn.connect(function(err)  {
  if(err) throw err;
  console.log("connected!?");
});

function getPost()  {
  
}
