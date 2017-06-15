var express = require('express');
var bookRouter = express.Router();

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
          .get(function (res, res) {
            res.render('books', {
              title : "Hello from Render",
              books : books,
              nav :[{
                Link : "/Author",
                Text : "Authors"
              },{
                Link : "/Books",
                Text : "Books"
              }]
            });
          });

bookRouter.route('/single')
          .get(function (res, res) {
            res.send("Hello Single Book");
          });

bookRouter.get('/books', function (req, res) {
  res.render('index', {
    list :['jayanth', 'raj', 'pramuk'],
    title :"My Library"
  });
});

module.exports = bookRouter;