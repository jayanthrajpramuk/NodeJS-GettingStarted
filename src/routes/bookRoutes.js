var express = require('express');
var bookRouter = express.Router();

var Log = require('Log');
log = new Log('info');

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

  bookRouter.route('/:id').get(function (req, res) {
    var id = req.params.id;
    log.info("Id is ",id);
    log.info("Books are  is ",books);
    res.render('book', {
      title : "My Library",
      book : books[id],
      nav : nav
    });
  });

  bookRouter.route('/').get(function (req, res) {
    res.render('books', {
      title : "My Library",
      books : books,
      nav : nav
    });
  });

  return bookRouter;
};



module.exports = routes;