// old function from a previous activity
const assertEqual = require('./assertEqual');

// new function below
const eqArrays = function(arr1, arr2) {
  let result = true;

  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      result = false;
    }
  }

  // console.log(result); //test
  return result;
};

module.exports = eqArrays;
