/**
 * Created by a028515 on 04-07-2017.
 */
console.log("Hello");


// Basic Timeout
/*

setTimeout(function () {
  console.log("Level 1");
   setTimeout(function () {
     console.log("Level 2");
     setTimeout(function () {
       console.log("Level 3");
       setTimeout(function () {
         console.log("Level 4");
       },1000);
     },1000);
   },1000);
},1000);

*/



// This example will never work. Because every thing is still in call stack

setTimeout(function () {
  console.log("setTimeout 1");
  process.nextTick(function () {
    console.log("setTimeout 2");
    setTimeout(function () {
      for(i=0;i<=1000000;i++) {
        if(i==100000){
          console.log("setTimeout Reached number");
        }
      }
      console.log("setTimeout 3");
      setImmediate(function () {
        console.log("setTimeout 4");
      });
    },1000);
  },1000);
},1000);



// Actual example for prority of Settimeout, immediate and nextTick
setTimeout(function () {
  console.log("F-1");
}, 1000);

setTimeout(function () {
  console.log("F-2");
}, 1000);

setImmediate(function () {
  console.log("F-3");
});

setTimeout(function () {
  console.log("F-4");
}, 1000);

process.nextTick(function () {
  console.log("F-5");
}, 1000);

process.nextTick(function () {
  console.log("RANDOM !!");
}, 1000);

setTimeout(function () {
  console.log("F-6");
}, 1000);

console.log("Before Completion of Exiting call stack , Am Here ;) ");



// trying nexttick in same stack
console.log("Started Stack ");
setTimeout(function () {
  console.log("Level 1");
  process.nextTick(function () {
    console.log("Level 2");
    setTimeout(function () {
      for(i=0;i<=1000000;i++) {
        if(i==100000){
          console.log("Reached number");
        }
      }
      console.log("Level 3");
      setTimeout(function () {
        console.log("Level 4");
      });
    },1000);
  },1000);
},1000);

console.log("Before Completion of Exiting call stack , Am Here ;) ");
