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
        console.log("db connection succesfull")
      }
    });
  }

  newPost() {

    console.log("newpost körs");

    var query = {
      name: 'insertPost',
      text: "INSERT INTO postnotice(post) VALUES ($1)",
      values: ["Du har fått post"],
    }

    this.conn.query(query, (err) =>  {
      if(err) {
        console.log(err.stack);
      } else {
        console.log("Post inserted successfully");
      }
    });
  }

  getPost()  {

    var query = {
      name: 'getPost',
      text: "SELECT * FROM postnotice",
    }
    this.conn.query(query, (err, res) =>  {
      if(err) {
        console.log(err.stack);
      } else {
        console.log(res)
      }
    });
  }
}
