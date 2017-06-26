var express = require('express');
var dailyStatusRouter = express.Router();
var mongodb = require('mongodb').MongoClient;

var Log = require('Log');
log = new Log('info');

var books = [{
  title:"Hey",
  genere : "Hey",
  author :"Hey",
  read :"false"
},
  {
    title:"Hey2",
    genere : "Hey2",
    author :"Hey2",
    read :"false2"
  }];

var routes = function() {

  dailyStatusRouter.route('/dailyStatus').get(function (req, res) {
    log.info("This is from Daily Status");
    var url = "mongodb://localhost:27017/libraryApp";

    mongodb.connect(url , function (err, db) {
      var collection = db.collection('books');
      collection.insertMany(books, function (err,results) {
        res.send(results);
        db.close();
      })
    });

  });

  return dailyStatusRouter;
};

module.exports = routes;

