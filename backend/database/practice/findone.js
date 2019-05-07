var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:20000/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  dbo.collection("customers").find({}, { _id: 0, name: 1, address: 1 } ).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});