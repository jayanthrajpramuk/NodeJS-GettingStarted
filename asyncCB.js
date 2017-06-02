var add = function (a, b) {
  setTimeout(function () {
    cb();
  },2000);
  console.log(a+b);
};

var sub = function (a,b) {
  setTimeout(function () {
    cb();
  },2000);
  console.log(a-b);
};

var mul = function (a,b) {
  setTimeout(function () {
    console.log("Done !!")
  },2000);
  console.log(a*b);

};

var div = function (a,b) {
  setTimeout(function () {
    cb();
  },2000);
  console.log(a/b);
};



