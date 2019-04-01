'use strict'
const mysql = require('mysql2');



module.exports = class DatabaseHandler {

  constructor() {
    this.conn;
    this.createConn();
  }

  createConn() {
    this.conn = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "",
      database: "postsense"
    });

    this.conn.connect(function(err) {
      if(err) {
        console.log(err.stack);
      } else {
        console.log("db connection succesfull");
      }
    });
  }

  newPost() {

    console.log("newpost körs");

   var query = "INSERT INTO postnotice(post) VALUES('post')";

    this.conn.query(query, (err) =>  {
      if(err) {
        console.log(err.stack);
      } else {
        console.log("Post inserted successfully");
      }
    });
  }

  getPost()  {

    var query = "SELECT timestamp_pk FROM postnotice";
    var times = []

    this.conn.query(query, (err, res) =>  {
      if(err) {
        console.log(err.stack);
      } else {

        console.log("timestamp extracted successfully");
        console.log(res);
        for(var i = 1; i < res.length; i++)  {

          times.push(res.rows[i]);

        }
        console.log(times);
        return times;
      }
    });
  }
}
