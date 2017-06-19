var express = require('express');
var bookRouter = express.Router();

var Log = require('Log');
log = new Log('info');

const pg = require('pg');

//var nav = require('../nav/navigation');

var books = [{
  title :"War and Peace",
  genere :"History / Fiction",
  author : "Tolopsky",
  read :"false"
},{
  title :"Harry Potter",
  genere :"Fantasy",
  author : "J K Rowling",
  read :"true"
},{title :"The Hobbit",
  genere :"Fantasy Drama",
  author : "James T Kirk",
  read :"false"
},{
  title :"Game of thrones",
  genere :"Drama",
  author : "Crowne",
  read :"false"
}];

var routes = function(nav) {

/*  bookRouter.route('/:id').get(function (req, res) {
    var id = req.params.id;
    log.info("Id is ",id);
    log.info("Books are  is ",books);
    res.render('book', {
      title : "My Library",
      book : books[id],
      nav : nav
    });
  });*/

  /*bookRouter.route('/').get(function (req, res) {
   res.render('books', {
   title : "My Library",
   books : books,
   nav : nav
   });
   });*/

  bookRouter.route('/:oid').get(function (req, res) {


    const connectionString = 'postgresql://postgres:postgres@localhost:5432/pms';
    pg.connect(connectionString, function(err, client, done) {
      var oid = req.params.oid;

      log.info("Passed Id is ",  req.params.oid);
      if(err) {
        console.log(err);
        return res.status(500).json({success: false, data: err});
      }

      client.query('SELECT * FROM Books  WHERE id=($1)', [oid], function (err, recordSet) {


        log.info("Book details are are :",recordSet.rows);
        done();

        res.render('book', {
          title : "My Library",
          book : recordSet.rows[0],
          nav : nav
        });

      });
    });

  });

  bookRouter.route('/').get(function (req, res) {

    const connectionString = 'postgresql://postgres:postgres@localhost:5432/pms';
    pg.connect(connectionString, function(err, client, done) {
      if(err) {
        console.log(err);
        return res.status(500).json({success: false, data: err});
      }

      client.query('SELECT * FROM Books ORDER BY id ASC', function (err, recordSet) {


        log.info(recordSet);
        done();

        res.render('books', {
          title : "My Library",
          books : recordSet.rows,
          nav : nav
        });

      });
    });
  });

  return bookRouter;
};

module.exports = routes;
