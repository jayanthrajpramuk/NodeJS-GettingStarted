var express = require('express');
var app = express();

var port = process.env.PORT || 5000;

console.log("Before listening to port");

// start and listen to the port mentioned
app.listen(port , function () {
  console.log("Hello Node in the Port!!", port);
});

console.log("After listeninf to port");

console.log(process.env.PORT); // if set , will get the value
console.log(process.env.OS); // if set , will get the value : Windows_NT

app.use(express.static('public'));
app.use(express.static('src/views'));

app.get('/', function (req, res) {
  //res.send("Hello World");
  res.send("<html><p><h1>Hello Node JS !!!!</h1></p></html>");
});

app.get('/books', function (req, res) {
  res.send("<html><p><h1>Hello Books !!!!</h1></p></html>");
});
