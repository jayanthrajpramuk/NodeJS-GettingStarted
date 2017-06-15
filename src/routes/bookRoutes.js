var express = require('express');
var bookRouter = express.Router();
var Log = require('Log');
log = new Log('info');

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
},{
  title :"The Hobbit",
  genere :"Fantasy Drama",
  author : "James T Kirk",
  read :"false"
},{
  title :"Game of thrones",
  genere :"Drama",
  author : "Crowne",
  read :"false"
}];

bookRouter.route('/')
          .get(function (req, res) {
            res.render('books', {
              title : "My Library",
              books : books,
              nav :[{
                Link : "/author",
                Text : "Authors"
              },{
                Link : "/books",
                Text : "Books"
              }]
            });
          });

bookRouter.route('/:id')
          .get(function (req, res) {
            var id = req.params.id;
            log.info("Id is ",id);
            log.info("Books are  is ",books);

            res.render('book', {
              title : "My Library",
              book : books[id],
              nav :[{
                Link : "/author",
                Text : "Authors"
              },{
                Link : "/books",
                Text : "Books"
              }]
            });

          });

bookRouter.get('/books', function (req, res) {
  res.render('index', {
    list :['jayanth', 'raj', 'pramuk'],
    title :"My Library"
  });
});

module.exports = bookRouter;