var  a = 1;
var b = 2;
var c = a+b;

console.log(a+b); // console.log in browser and nodeJS

// function Statement
function greet() {
  console.log("Hello NODEJS");
}
greet();

// function Expression

var greetKannada = function () {
  console.log("Namaskara NodeJS");
};
greetKannada();

//first call functions

function greetBoth (cb, cb2) {
  console.log("--- Greeting both !! ----");
  cb2();
  cb();
}

greetBoth(greet , greetKannada);

// using function expression on the fly.

greetBoth(function () {
  console.log("Hola NODEJS");
} , function () {
  console.log("Moshi Moshi NODEJS");
});