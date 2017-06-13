var express = require('express');
var app = express();

var port = 5000;

console.log("Before listening to port");

// start and listen to the port mentioned
app.listen(port , function () {
  console.log("Hello Node in the Port!!", port);
});

console.log("After listeninf to port");

console.log(process.env.PORT) // if set , will get the value
console.log(process.env.OS) // if set , will get the value : Windows_NT

app.get('/', function (req, res) {
  //res.send("Hello World");
  res.send("<html><p><h1>Hello Node JS !!!</h1></h1></p></p></html>");
});

