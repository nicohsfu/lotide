const eqArrays = require('./eqArrays');

// new function below
const assertArraysEqual = function(arr1, arr2) {

  let comparison = eqArrays(arr1, arr2);

  if (comparison) {
    // console.log("this is true"); //test
    return true;
  } else {
    // console.log("this is false"); //test
    return false;
  }

};

module.exports = assertArraysEqual;