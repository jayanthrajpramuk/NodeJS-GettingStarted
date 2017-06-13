var express = require('express');
var app = express();

var port = 5000;

console.log("Before listening to port");

app.listen(port , function () {
  console.log("Hello Node in the Port!!", port);
});

console.log("After listeninf to port");

