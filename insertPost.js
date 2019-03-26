

void function insertPost(val) {
var sql = "INSERT INTO postnotice (post) VALUES (?)";
conn.query(sql, function(err, result) {
  if(err) throw err;
  console.log("post inserted");
});
}
