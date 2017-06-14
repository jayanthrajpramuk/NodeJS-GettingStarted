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
    console.log("Done !!");
  },2000);
  console.log(a*b);

};

var div = function (a,b) {
  setTimeout(function () {
    cb();
  },2000);
  console.log(a/b);
};

// Example for Reference
function generateRandomNumber () {
  return new Promise(function (resolve, reject) {
    var randomNumber = Math.floor((Math.random() * 10) + 1);
    if (randomNumber <= 5) {
      resolve(randomNumber);
    } else {
      reject(randomNumber);
    }
  });
}

generateRandomNumber().then(function(result) {
  console.log('Success: ' + result);
}).catch(function(error) {
  console.log('Error: ' + error);
});



