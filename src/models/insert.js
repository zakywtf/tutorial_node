var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("tutorial_node");
  var myobj =  {
    kota: "Surabaya",
    ip_address: "36.82.98.8",
    latitude: "-7.2492",
    longitude: "112.7508",
    browser: "Handheld Browser",
    os: "Android",
    user_agent: "Mozilla/5.0 (Linux; Android 8.1.0; Redmi Note 5 Build/OPM1.171019.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/72.0.3626.121 Mobile Safari/537.36 Instagram 86.0.0.24.87 Android (27/8.1.0; 374dpi; 1080x2050; Xiaomi/xiaomi; Redmi Note 5; whyred; qcom; in_ID; 147375143)",
    created_at: "2019-04-03 18:20:29"
  };
  dbo.collection("log_user").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
}); 