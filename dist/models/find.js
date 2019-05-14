"use strict";

var MongoClient = require('mongodb').MongoClient;

var url = "mongodb://localhost:27017/";
MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  var dbo = db.db("tutorial_node");
  dbo.collection("log_user").findOne({}, function (err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});