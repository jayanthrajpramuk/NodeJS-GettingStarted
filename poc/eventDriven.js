/**
 * Created by a028515 on 04-07-2017.
 */

// Basic Callback Stratergy
/*var getUserDetails = function (id, cb) {
  if(id!=9) {
    cb(new TypeError('Specified ID is not 9'));
  };
  console.log("User Details Fetched ");
  cb(null, {id:9,name:"Jayanth"})
};

getUserDetails(9, function(err, data) {
  if(err) {
    console.log("Error Occured");
    throw  err;
  }
  console.log("Here is our data", data);
});*/

//This is using Promises
var getUserDetailsPromise = function (id) {
  return new Promise(function (resolve, reject) {
    if(id!=9) {
      reject(new TypeError('Specified ID is not 9'));
    };
    console.log("User Details Fetched ");
    resolve({id:9,name:"Jayanth"});
  });

};

getUserDetailsPromise(9)
.then(function (data) {
   console.log("Here is our data", data);
   data.new = "DashaAvatara"
   return data;
}).then(function (data) {
  console.log("Hey look we can pass the data along", data.new);
})
.catch(function (err) {
  console.log(err);
})



